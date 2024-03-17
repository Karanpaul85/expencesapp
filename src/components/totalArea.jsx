const TotalArea = () => {
  const totalData = {
    total: 1600.5,
    balance: 200,
    lastAmountCredit: {amount:1000, date:"11-mar-24"},
    monthCredit: 3000,
    shopkeeper: true,
  };
  return (
    <div
      className={`w-full rounded-lg shadow-all ${
        totalData.shopkeeper ? "p-5" : "pt-10 pb-10 pl-5 pr-5"
      } mb-5`}
    >
      <div className="w-full text-28 font-medium justify-center text-center">
        ₹ {totalData?.total}
      </div>
      {totalData?.shopkeeper && (
        <div className="w-full flex justify-between flex-wrap mt-4">
          <div className="w-1/2">
            <div className="text-darkgrey text-12">Balance</div>
            <div
              className={`${
                totalData.balance > 0 ? "text-green" : "text-primaryRed"
              } font-medium`}
            >
              ₹ {totalData.balance}
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-end">
            <div className="text-darkgrey text-12 capitalize">Credit at {totalData.lastAmountCredit.date}</div>
            <div className=" font-medium">₹ {totalData.lastAmountCredit.amount}</div>
          </div>
          <div className="w-full mt-4">
            <div className="text-darkgrey text-12">
              Total Amount Paid in this Month
            </div>
            <div className=" font-medium">₹ {totalData.monthCredit}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default TotalArea;
