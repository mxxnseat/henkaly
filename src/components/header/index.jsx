import { Menu } from "./menu";
import { Tabs } from "./tabs";


export function Header(){
    return (
        <header className="header">
            <div className="container">
                <Menu />

                    <div className="row header_content-wraper">
                        <div className="header__content col-7">
                            <h1 className="header__content-heading">
                                Cамая крупная<br/>
                                <span className="text_select-red">
                                сеть хинкальных
                                </span><br />
                                в России
                            </h1>
                            <div className="header__content-text">
                                Открой хинкальную с доставкой в своем городе!
                            </div>

                            <button className="button col-7">
                                получить бизнес план
                            </button>
                        </div>

                        <Tabs />
                </div>
            </div>
        </header>
    )
}