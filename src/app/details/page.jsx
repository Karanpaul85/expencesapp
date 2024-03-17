"use client";
import FooterStickyButtons from "@/components/footerStickyBtns";
import ItemsList from "@/components/itemsList";
import ProfilePhotoName from "@/components/profilePhotoName";
import TotalArea from "@/components/totalArea";

const Details = () => {
  const shopkeeper = true;
  const expenseData = [
    {
      date: "17-03-2024",
      dayExpense: [
        {
          item: "Milk",
          itemPrice: 132,
          shopkeeperName: "Rakesh",
          itemIcon: "milk",
          id: 1,
        },
        {
          item: "Milk",
          itemPrice: 132,
          shopkeeperName: "Rakesh",
          itemIcon: "milk",
          id: 1,
        },
      ],
    },
    {
      date: "16-03-2024",
      dayExpense: [
        {
          item: "Milk",
          itemPrice: 132,
          shopkeeperName: "Rakesh",
          itemIcon: "milk",
          id: 1,
        },
        {
          item: "Milk",
          itemPrice: 132,
          shopkeeperName: "Rakesh",
          itemIcon: "milk",
          id: 1,
        },
        {
          item: "Milk",
          itemPrice: 132,
          shopkeeperName: "Rakesh",
          itemIcon: "milk",
          id: 1,
        },
        {
          item: "Milk",
          itemPrice: 132,
          shopkeeperName: "Rakesh",
          itemIcon: "milk",
          id: 1,
        },
      ],
    },
    {
      date: "15-03-2024",
      dayExpense: [
        {
          item: "Milk",
          itemPrice: 132,
          shopkeeperName: "Rakesh",
          itemIcon: "milk",
          id: 1,
        },
        {
          item: "Milk",
          itemPrice: 132,
          shopkeeperName: "Rakesh",
          itemIcon: "milk",
          id: 1,
        },
        {
          item: "Milk",
          itemPrice: 132,
          shopkeeperName: "Rakesh",
          itemIcon: "milk",
          id: 1,
        },
        {
          item: "Milk",
          itemPrice: 132,
          shopkeeperName: "Rakesh",
          itemIcon: "milk",
          id: 1,
        },
      ],
    },
  ];
  return (
    <>
      <main className="w-full p-5 h-[calc(100vh-44px)] overflow-auto">
        <ProfilePhotoName />
        <TotalArea />
        <div className="text-16 font-medium w-full mb-5">
          All Expenses {shopkeeper && "(Shopkeeper Name)"}
        </div>
        <ItemsList items={expenseData} shopkeeper={shopkeeper} />
      </main>
      <FooterStickyButtons />
    </>
  );
};
export default Details;
