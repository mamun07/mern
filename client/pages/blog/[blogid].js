import {useRouter} from 'next/router'


const singleBlog = () => {
  const routerID = useRouter()
  const productID = routerID.query.blogid

    return (
        <div>
            #{productID} Blog details 
        </div>
    )
}

export default singleBlog
