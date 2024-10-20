export const VisitLine = ({ isUsual, date }) => {
  return (
    <div className="visitLine">
      {isUsual ? (
        <>
          <div className="emptyField"></div>
          <div className="visitTime">час</div>
          <div className="doctorNames">
            <div>В</div>
            <div>І</div>
            <div>О</div>
            <div>С</div>
          </div>
        </>
      ) : (
        <>
          <div id="dateLine">{date}</div>
        </>
      )}
    </div>
  );
};
