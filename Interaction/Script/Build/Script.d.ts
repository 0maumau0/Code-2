declare namespace Script {
    import f = FudgeCore;
    class CubaControl extends f.ComponentScript {
        static readonly iSubclass: number;
        message: string;
        rotateSpeed: number;
        constructor();
        hndEvent: (_event: Event) => void;
        update: () => void;
        experiment: (_angle: number) => void;
        drive(_speed: number): void;
    }
}
declare namespace Script {
    const leftclick: boolean;
}
