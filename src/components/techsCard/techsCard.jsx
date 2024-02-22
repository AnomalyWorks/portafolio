import './techsCard.css'

function TechsCard({ techs }) {
    return (
        <div className='flex justify-center w-full mt-8 mb-16'>
            <div className='flex flex-col items-center border border-dashed border-white w-3/4 h-fit shadow-[0_35px_20px_-15px_rgba(1,1,1,0.5)]'>
                <h3 className='font-["Zector"] text-white uppercase mb-3'>Technologies used</h3>
                <div className='pl-8 pr-8 pb-4 flex gap-4 flex-wrap justify-center'>
                        {
                            techs.map( (iconTech) => (
                                <div key={iconTech.id} className=' opacity-75 border border-dashed border-white flex p-4 pb-2 pt-1 justify-items-center items-center flex-col rounded'>
                                    <h3 className='text-white'>{iconTech.id}</h3>
                                    <p className='text-white text-xs font-thin uppercase'>{iconTech.description}</p>
                                </div>
                            ))
                        }
                </div>
            </div>
        </div>
    )
}

export default TechsCard;