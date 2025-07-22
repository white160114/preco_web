let bluetoothDevice: BluetoothDevice | null = null;
let characteristic: BluetoothRemoteGATTCharacteristic | null = null;

export const connectBluetooth = async (): Promise<void> => {
    try {
        bluetoothDevice = await navigator.bluetooth.requestDevice({
            filters: [{ services: ["4fafc201-1fb5-459e-8fcc-c5c9c331914b"] }],
        });

        if (!bluetoothDevice.gatt) {
            throw new Error("GATT サーバが利用できません");
        }

        const server = await bluetoothDevice.gatt.connect();
        const service = await server.getPrimaryService(
            "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
        );

        characteristic = await service.getCharacteristic(
            "beb5483e-36e1-4688-b7f5-ea07361b26a8"
        );

        const value = await characteristic.readValue();
        const level = value.getUint8(0);
        console.log("バッテリーレベル:", level);
    } catch (error) {
        console.error("Bluetooth接続に失敗:", error);
    }
};

export const sendDirection = async (
    direction: "forward" | "backward" | "left" | "right"
) => {
    if (!characteristic) {
        console.error("characteristicが未接続です");
        return;
    }

    let commandByte: number;
    switch (direction) {
        case "forward":
            commandByte = 0x01;
            break;
        case "backward":
            commandByte = 0x02;
            break;
        case "left":
            commandByte = 0x03;
            break;
        case "right":
            commandByte = 0x04;
            break;
        default:
            return;
    }

    try {
        await characteristic.writeValue(Uint8Array.of(commandByte));
        console.log(`指令 ${direction} を送信`);
    } catch (error) {
        console.error("指令送信失敗:", error);
    }
};

export const disconnectDevice = () => {
    if (bluetoothDevice?.gatt) {
        bluetoothDevice.gatt.disconnect();
        console.log("Bluetooth切断しました");
    } else {
        console.warn("Bluetoothデバイスは接続されていません");
    }
};
