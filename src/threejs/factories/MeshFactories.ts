import BoxFactory from "./BoxFactory";
import ConeFactory from "./ConeFactory";
import IBoxFactory from "../types/IBoxFactory";
import IConeFactory from "../types/IConeFactory";

export default class ConcreteMeshFactories {
    public static createBoxFactory(): IBoxFactory {
        return BoxFactory.getInstance();
    }

    public static createConeFactory(): IConeFactory {
        return ConeFactory.getInstance();
    }
}