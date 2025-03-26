import AddAddressForm from "@/components/Forms/AddAddressForm/AddAddressForm";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";

// Make it an async function and use PascalCase for component name
export default async function AddAddressPage({ searchParams }: any) {
  // Extract the addressId (Next.js 15 expects this to be handled asynchronously)
  const addressId = searchParams?.addressId;

  return (
    <CustomPageWrapper heading="Add Address">
      <div className="flex gap-[70px] w-[1000px] max-[1000px]:w-full mx-auto max-[1050px]:gap-[10px] max-[800px]:flex-col">
        <div className="flex-[0.5] max-[800px]:hidden">
          <img src={"assets/map/map.png"} alt="map" className="w-full h-full" />
        </div>
        <div className="flex-[0.5]">
          <AddAddressForm addressId={addressId} />
        </div>
      </div>
    </CustomPageWrapper>
  );
}