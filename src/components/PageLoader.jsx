import React, {useState, useEffect} from 'react'
import PulseLoader from "react-spinners/PulseLoader";


const PageLoader = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }, [])

    return (
        <div>
            {
                loading ?
                <div className="spinnertxt">
                    <PulseLoader  color={'#1976d2'}  loading={loading}  size={30} />
                </div> :
                <h2>Content</h2>
            }
        </div>
    )
}

export default PageLoader
