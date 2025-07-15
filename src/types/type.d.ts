// src/types/bluetooth.d.ts

interface RequestDeviceOptions {
    filters?: Array<{
        services?: Array<string>;
        name?: string;
        namePrefix?: string;
    }>;
    optionalServices?: Array<string>;
    acceptAllDevices?: boolean;
}

interface BluetoothDevice {
    gatt?: BluetoothRemoteGATTServer;
    name?: string;
}

interface BluetoothRemoteGATTServer {
    connect(): Promise<BluetoothRemoteGATTServer>;
    disconnect(): void;
    getPrimaryService(service: string): Promise<BluetoothRemoteGATTService>;
}

interface BluetoothRemoteGATTService {
    getCharacteristic(
        characteristic: string
    ): Promise<BluetoothRemoteGATTCharacteristic>;
}

interface BluetoothRemoteGATTCharacteristic {
    readValue(): Promise<DataView>;
}

interface Bluetooth {
    requestDevice(options: RequestDeviceOptions): Promise<BluetoothDevice>;
}

interface Navigator {
    bluetooth: Bluetooth;
}
