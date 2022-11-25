import { useState } from 'react'
import Layout from '../components/Layout'
import { NFTCard } from '../components/nftCard'

export default function Home() {
  const api_key = "yt-j-vaRkULHSxSyS6ocqFH466leTKNq"
  const [wallet, setWalletAddress] = useState("")
  const [collection, setCollectionAddress] = useState("")
  const [NFTs, setNFTs] = useState([])
  const [fetchForCollection, setFetchForCollection] = useState(false)
  const fetchNFTs = async () => {
    let nfts
    console.log("fetching nfts")
    const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTs/`
    var requestOptions = {
      method: 'GET'
    };

    if (!collection.length) {

      const fetchURL = `${baseURL}?owner=${wallet}&withMetadata=true&pageSize=100`

      nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
    } else {
      console.log("fetching nfts for collection owned by address")
      const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}&withMetadata=true&pageSize=100`
      nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
    }

    if (nfts) {
      console.log("nfts:", nfts)
      setNFTs(nfts.ownedNfts)
    }
  }

  const fetchNFTsForCollection = async () => {
    if (collection.length) {
      var requestOptions = {
        method: 'GET'
      };
      const api_key = "yt-j-vaRkULHSxSyS6ocqFH466leTKNq"
      const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTsForCollection/`
      const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=true&pageSize=15`
      const nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
      if (nfts) {
        console.log("NFTs in collection:", nfts)
        setNFTs(nfts.nfts)
      }
    }
  }

  return (
    <Layout>
      <div className='flex flex-wrap flex-col w-full justify-center items-center m-0 p-0 text-gray-900'>

        <div className="flex flex-wrap flex-col w-full justify-center items-center px-0 py-4 m-0 bg-slate-600 rounded-lg">
          <p className='pb-2 text-gray-100 font-medium text-xl'>Fetch NFTs</p>
          <p className='pb-2 text-gray-100 font-s text-xs'>Please only input one field</p>

          <div className='flex items-center'>
            <img src='/images/find.png' width={24} height={24} /><input className='m-1' onChange={(e) => { setWalletAddress(e.target.value) }} value={wallet} type={"text"} placeholder="Add your wallet address"></input></div>


          <div className='flex items-center'>
            <img src='/images/findcollection.png' width={24} height={24} />
            <input className='my-2 m-1' onChange={(e) => { setCollectionAddress(e.target.value) }} value={collection} type={"text"} placeholder="Add the collection address"></input></div>

          <label className="text-gray-100 "><input onChange={(e) => { setFetchForCollection(e.target.checked) }} type={"checkbox"} className="mr-2"></input>Fetch for collection</label>


          <button className={"disabled:bg-slate-500 text-white bg-blue-500 px-4 py-2 mt-3 rounded-sm w-25 hover:bg-slate-700 flex"} onClick={
            () => {
              if (fetchForCollection) {
                fetchNFTsForCollection()
              } else fetchNFTs()
            }
          }
          >Let's go!
          </button>

          <div className='flex flex-wrap gap-y-4 my-4 mx-2 w-full gap-x-4 justify-center items-center p-0'>
            {
              NFTs.map(nft => {
                return (
                  <NFTCard nft={nft}></NFTCard>
                )
              })}

          </div>
        </div>
      </div>
    </Layout>
  )
}