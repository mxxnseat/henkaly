import { CountItem } from "./countItem"

export function Count(){
    const countState = [
        {
            id: 1,
            value: 0
        },
        {
            id: 2,
            value: 0
        },
        {
            id: 3,
            value: 0
        },
        {
            id: 4,
            value: 0
        },
        {
            id: 5,
            value: 0
        },
        {
            id: 6,
            value: 0
        },
        {
            id: 7,
            value: 0
        },
        {
            id: 8,
            value: 0
        },
        {
            id: 9,
            value: 0
        }
    ]// Нужно запрогать

    return (
        <div className="count__wrapper row justify-content-between  col-12">
            {
                countState.map((digit)=>{
                    return <CountItem key={digit.id} value={digit.value} />
                })
            }
        </div>
    )
}