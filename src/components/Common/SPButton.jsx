const SPButton = ({ content, isLoading }) => {
  return (
    <div>
      {
        isLoading ? <button disabled className='spbtn flex gap-5 items-center btn mt-5'>
           <img className="w-12" src="/assets/cat.gif" />
          Hacking...</button>
          :
          <button className='spbtn btn mt-5'>{content}</button>
      }
    </div>
  )
}

export default SPButton