import { Model } from "./model";
import { Stage } from "./stage";

export function Finance(){
    return (
        <section className="finance">
            <div className="container">
                <div className="row mx-auto col-12 p-0">
                    <Model />
                    <Stage />
                </div>
            </div>
        </section>
    )
}