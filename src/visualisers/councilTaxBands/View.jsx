function DrawChart(props) {
  const { band, index, count, max } = props;
  console.log(max);

  const bandId = `band_${band}`;
  const yOff = 15 * index;

  return <g>
    <text x="0" y={ yOff + 11 }>{ band } { count }</text>
    <rect className={ bandId } x="40" y={ yOff } height="15" width={ count * 160/max } strokeWidth="5"/>
  </g>;
}

function summarise(summary, event) {
  summary[event.eventData.band]++;
  return summary;
}

export default function View(props) {
  const { events } = props;

  const councilTaxBands = events
    .filter(event => event.type === 'councilTaxRegistration' )
    .reduce(summarise, { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, U: 0 });

  console.log(councilTaxBands);
  const { count, max } = Object.values(councilTaxBands).reduce((acc, band) => {
    console.log(band);
    acc.count += band;
    if ( band > acc.max ) acc.max = band;
    return acc;
  }, { count: 0, max: 0 })

  const bandCount = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'U'].map((band, idx) => (
    <DrawChart band={band} key={idx} index={ idx } count={ councilTaxBands[band] } max={ max }/>
  ));

  return <div>
    <h2>Council Tax</h2>
    <div className='count'>{ count }</div>
    <div className='centred'>matched</div>
    <svg viewBox="0 0 200 140">{ bandCount }</svg>
    <p></p>
  </div>;
}