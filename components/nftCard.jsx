export const NFTCard = ({ nft }) => {

    return (
    <div className="w-[320px] h-[17rem] p-2 flex flex-col bg-slate-100 rounded-md shadow-m mt-4 hover:bg-blue-200 hover:shadow-2xl">
            <div className="flex justify-center">
            <img className="h-[10rem] rounded" src={nft.media[0].gateway} ></img>
            </div>
                <h2 className="text-l text-gray-800 truncate">{nft.title}</h2>
                <p className="text-xs text-gray-600 truncate">Id: {nft.id.tokenId}</p>
                <p className="text-xs text-gray-600 truncate" >{nft.contract.address}</p>
                <p className="text-sm text-gray-600 truncate">{nft.description}</p>
    </div>
    )
}