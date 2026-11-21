
import logo1 from '../../assets/brands/logo1.png'
import logo2 from '../../assets/brands/logo2.png'
import logo3 from '../../assets/brands/logo3.png'
import logo4 from '../../assets/brands/logo4.png'

function Brands(){
    const brands=[
        {logo:logo1,name:"gucci"},
        {logo:logo2,name:"nike"},
        {logo:logo3,name:"zara"},
        {logo:logo4,name:"fila"}
    ]
    return(
        //overflow-hidden
        <section className='py-4 overflow-hidden border border-gray-400'>
            <div className='animate-brand'>
                <ul className='flex items-center gap-4'>
                    {brands.map((brand)=>(
                        <li className='' key={brand.name}><img src={brand.logo} alt={brand.name} width={100} height={100} /></li>
                    ))}
                </ul>   
                
                
            </div>
        </section>
    )
}
export default Brands