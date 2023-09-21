import './notFound.sass'
interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = ({}) => {
    return (
        <div className='container-notFound'>
            <p>Page not found</p>
            <img src='/notFound.avif' alt='notFound' />
        </div>
    )
}

export default NotFound