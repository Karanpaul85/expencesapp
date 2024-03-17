import Icon from "./Icon";

const ItemsList = ({ items, shopkeeper }) => {
  return (
    <>
      {items?.length &&
        items?.map((day, index) => {
          return (
            <div
              className={`flex flex-col w-full ${
                items.length - 1 !== index ? "mb-5" : ""
              }`}
              key={day.date}
            >
              <div className="text-14 text-darkBlack mb-2.5">{day.date}</div>
              {day?.dayExpense.map((item, itemIndex) => {
                return (
                  <div
                    className={`flex justify-between rounded-lg h-[50px] relative pl-14 border border-lightGrey overflow-hidden ${
                      day.dayExpense.length - 1 !== itemIndex ? "mb-2.5" : ""
                    }`}
                    key={item.id}
                  >
                    <div className="w-[50px] h-[50px] absolute top-0 left-0 flex items-center justify-center">
                      <Icon name={item?.itemIcon} classes="w-12 h-12" />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                      <div className="text-14">{item?.item}</div>
                      {!shopkeeper && (
                        <div className="text-12 text-darkgrey">
                          {item?.shopkeeperName}
                        </div>
                      )}
                    </div>
                    <div className="flex h-full pr-2 items-center text-darkBlack font-medium text-16">
                      ₹ {item?.itemPrice}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
    </>
  );
};
export default ItemsList;
