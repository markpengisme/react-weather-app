import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from "react-accessible-accordion"
import "./forecast.css"

const Forecast = ({ data }) => {
    return (
        <>
            <label className="title">3-hour Forecast</label>
            <Accordion allowZeroExpanded>
                {data.list.map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="item">
                                    <img
                                        alt="weather"
                                        className="icon-small"
                                        src={`icons/${item.weather[0].icon}.png`}
                                    />
                                    <label className="time">{item.dt_txt}</label>
                                    <label className="description">
                                        {item.weather[0].description}
                                    </label>
                                    <label className="min-max">
                                        {Math.round(item.main.temp_min)}°C /{" "}
                                        {Math.round(item.main.temp_max)}°C
                                    </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="details-grid">
                                <div className="details-grid-item">
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div className="details-grid-item">
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity}</label>
                                </div>
                                <div className="details-grid-item">
                                    <label>Clouds:</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="details-grid-item">
                                    <label>Wind speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="details-grid-item">
                                    <label>Sea level:</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className="details-grid-item">
                                    <label>Feels like:</label>
                                    <label>{item.main.feels_like}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast
