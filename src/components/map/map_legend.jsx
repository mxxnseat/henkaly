export function MapLegend(){
    return (
        <div className="henkali_map__legend">
            <div className="henkali_map__legend-heading">Легенда карты:</div>
            <div className="henkali_map__legend-item">
                <div className="henkali_map__legend-square open"></div>
                <div className="henkali_map__legend-text">-&nbsp;&nbsp;Открытые заведения</div>
            </div>
            <div className="henkali_map__legend-item">
                <div className="henkali_map__legend-square"></div>
                <div className="henkali_map__legend-text">-&nbsp;&nbsp;Перспективные города</div>
            </div>
        </div>
    )
}