import { Model } from "./model";
import { Stage } from "./stage";

export function Finance(){
    return (
        <section className="finance">
            <div className="container p-0">
                <div className="row mx-auto col-12 p-0">
                    <Model />
                    <Stage />
                </div>
            </div>
        </section>
    )
}