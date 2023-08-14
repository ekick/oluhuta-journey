import HeaderDetail from '../../components/wisata/HeaderDetail'
import { NavLink, useParams } from "react-router-dom";
import { Geo, Bio, Cul } from '../../hooks/StateWisata'

const ListSpot = () => {
    let {KategoriSpotID} = useParams();
    const geo = Geo.useState(s => s.geo)
    const bio = Bio.useState(s => s.bio)
    const cul = Cul.useState(s => s.cul)
    let data = {};
    
    if (KategoriSpotID == 'Geodiversity') {
        data = geo
    } else if (KategoriSpotID == 'Biodiversity') {
        data = bio
    } else if (KategoriSpotID == 'Culturaldiversity') {
        data = cul 
    }
    
    return (
        <div>
            <HeaderDetail judul={KategoriSpotID} link={"/"}/>
            {data.map((item, index) => {
            return(
                <div className='' key={index}>
                    <NavLink to={`/DeskripsiSpot/${KategoriSpotID}/${item.id}`}>
                        <ul class="max-w-md divide-y divide-gray-200">
                            <li class="pb-4 sm:pb-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <img class="w-14 h-14 rounded-xl" src={item.image} alt="/" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="font-cde text-sm font-medium text-black">
                                        {item.title}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </NavLink>
                <hr></hr>
                </div>
            )}
            )}
        </div>
    )
}

export default ListSpot
