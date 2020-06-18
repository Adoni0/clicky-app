import React, { Component } from 'react'
import characters from '../characters.json'
import Score from './Score'
import Card from './Card'
import Jumbotron from './Jumbotron'

export default class Home extends Component {

    state = {
        characters
    }

    render() {
        return (
            <div>
              <Score />
              <Jumbotron />

                {this.state.characters.map(char => {
                    return <Card 
                    img = {char.src}
                    />
                })}
            </div>
          

        /* <div className="col mb-4">
          <div className="card left" id='stewie1'>
            <img src="https://www.liveabout.com/thmb/AZq8udcF7H9mN1-TSdwJfRoqxOc=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/familyGuy__Stewie_para_72-56a00a5f3df78cafda9fc0cc.jpg" id='stew1' className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col mb-4">
          <div className="card center" id='herbert'>
            <img src="https://sottai.files.wordpress.com/2010/04/herbert-family-guy.jpg" id='herb' className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col mb-4">
          <div className="card right" id='carter'>
            <img src="https://i.pinimg.com/originals/b7/5e/bb/b75ebba8e88fc3c338a82bb1876643e9.jpg" className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col mb-4">
          <div className="card left" id='joe'>
            <img src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-family-guy-Patrick-Warburton.jpg" className="card-img-top" alt="..." />
          </div>
        </div>

        <div className="col mb-4">
          <div className="card center" id='cleaveland'>
            <img src="https://www.liveabout.com/thmb/9hDbpua-5jQG7pH_c-16yF5H0F4=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cleveland_v2Fb080309-56a00cf55f9b58eba4aead78.jpg" id='cleave' className="card-img-top" alt="..." />
          </div>
        </div>

        <div className="col mb-4">
          <div className="card right" id='quagmire'>
            <img src="https://www.liveabout.com/thmb/1k4LHSdZPiQNnbxMXT_xcXwRX24=/475x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fGuyQuagmireArt_v1fa-57a96bf33df78cf459bb222a.jpg" id='quag' className="card-img-top" alt="..." />
          </div>
        </div>

        <div className="col mb-4">
          <div className="card left" id='chris'>
            <img src="https://www.liveabout.com/thmb/D6_8tRfI1EJ2UHXQYKY5UoNRUUI=/520x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fGuy2006_Chris_f-56a00aff3df78cafda9fc740.jpg" id='chrs' className="card-img-top" alt="..." />
          </div>
        </div>

        <div className="col mb-4">
          <div className="card center" id='meg'>
            <img src="https://www.liveabout.com/thmb/_q3WDsOk_KSBGoS8sh2LU2-FFhM=/520x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fGuy2006_Meg_f-56a00b005f9b58eba4aea214.jpg" id='megatron' className="card-img-top" alt="..." />
          </div>
        </div>

        <div className="col mb-4">
          <div className="card right" id='brian'>
            <img src="https://www.liveabout.com/thmb/BZpbhDgZrMxOUdqqWArsayPicz8=/520x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fGuy2006_Brian_f-56a00b003df78cafda9fc74f.jpg" id='bri' className="card-img-top" alt="..." />
          </div>
        </div>

        <div className="col mb-4">
          <div className="card left" id='peter'>
            <img src="https://img00.deviantart.net/9cd2/i/2015/217/7/0/peter_griffin__family_guy__32_by_frasier_and_niles-d94aejw.jpg" id='pete' className="card-img-top" alt="..." />
          </div>
        </div>

        <div className="col mb-4">
          <div className="card center" id='lois'>
            <img src="https://www.liveabout.com/thmb/qL9NuJ5lmmRzMyFngIz9SyYjSiw=/520x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fGuy2006_Lois_f-56a00b003df78cafda9fc743.jpg" id='lis' className="card-img-top" alt="..." />
          </div>
        </div>

        <div className="col mb-4">
          <div className="card right" id='stewie2'>
            <img src="https://www.liveabout.com/thmb/fc5QH6AXdNtQRwuaQevxSSiwp1k=/520x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fGuy2006_Stewie1_f-56a00b003df78cafda9fc746.jpg" id='stew2' className="card-img-top" alt="..." />
          </div>
        </div> */

            
        )
    }
}
