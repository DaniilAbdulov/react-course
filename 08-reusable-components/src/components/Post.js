function Post(props) {
    const { title, body } = props;
    return (
        <div>
            <div className="post">
                <div className="post__title">{title}</div>
                <div className="post__body">{body}</div>
            </div>
        </div>
    );
}
export default Post;
