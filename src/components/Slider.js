import Reac, {useEffect} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { getArrSlider } from '../ultis/fn'
import * as actions from '../store/actions'
import { useNavigate } from 'react-router-dom'

const Slider = () => {
  const {banner} = useSelector(state => state.app)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //animation for banner
  useEffect(() => {
    const sliderEls = document.getElementsByClassName('slider-item')
    let min = 0
    let max = 2
    const interValId = setInterval(() => {
      const list = getArrSlider(min, max, sliderEls.length -1)

      
      for (let i = 0; i < sliderEls.length; i++) {
        // xoa classname (css)
          sliderEls[i]?.classList?.remove('animate-slide-right', 'order-last', 'z-20')
          sliderEls[i]?.classList?.remove('animate-slide-left', 'order-first', 'z-10')
          sliderEls[i]?.classList?.remove('animate-slide-left2', 'order-2', 'z-10')
        
        // Hide or show image
          if (list.some(item => item === i)) {
            sliderEls[i].style.cssText = `display: block`
          } else {
            sliderEls[i].style.cssText = `display: none`
          }
        }

      //Them animation
      list.forEach(item => {
        if (item === max) {
          sliderEls[item]?.classList?.add('animate-slide-right', 'order-last', 'z-20')
        } else if (item === min) {
          sliderEls[item]?.classList?.add('animate-slide-left', 'order-first', 'z-10')
        } else {
          sliderEls[item]?.classList?.add('animate-slide-left2', 'order-2', 'z-10')
        }
      })

     min = (min === sliderEls.length -1) ? 0 : min +1
     max = (max === sliderEls.length -1) ? 0 : max + 1
    }, 3000)
    return () => {
      interValId && clearInterval(interValId)
    }
  }, [])

  const handleClickBanner = (item) => {
    //Xu ly su kien khi click vao bai hat
    if (item?.type === 1) {
        dispatch(actions.setCurSongId(item.encodeId))
        dispatch(actions.play(true))
        dispatch(actions.setPlaylist(null))
    } else if (item?.type === 4) {
       //console.log(item)
       const albumPath = item?.link?.split('.')[0]
       navigate(albumPath)
    } else {
      dispatch(actions.setPlaylist(null))
    }

  }
  return (
    <div className='w-full overflow-x-hidden px-[59px]'>
      <div  className='flex w-full gap-6 pt-8'>
      {banner?.map((item, index) => (
        <img 
          key= {item.encodeId}
          src={item.banner}
          onClick = {() => handleClickBanner(item)}
          className={`slider-item flex-1 object-contain w-[30%] rounded-lg ${index <=2 ? 'block': 'hidden'}`}
        />
      ))}
      </div>
    </div>
  )
}

export default Slider