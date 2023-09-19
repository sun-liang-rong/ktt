interface IProps {
  message: string
}
function ErrorPage(props: IProps) {
  return(
    <>
      <h1>错误页面</h1>
      {props.message}
    </>
  )
}
export default ErrorPage;