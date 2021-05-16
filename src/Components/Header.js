import React from 'react';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FlipToFrontIcon from '@material-ui/icons/FlipToFront';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ReactTooltip from 'react-tooltip'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


const Header = () => {
    return (
        <React.Fragment>
            <div class="profileWrapper">
                <div class="topTileBackgorund"></div>
                <div class="breadCrump">
                    <div class="innerbreadCrump">
                        <span class="lightText yellowColor breadcrumb">Home</span>
                        <span class="lightText">&gt;</span>
                        <span class="lightText breadcrumb">Marketplace</span>
                    </div>
                </div>
                <div class="platformWrapper">
                    <div class="backgroundWrapper">
                        <div class="blackBorder"></div>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <div class="bolder">Discover all Platforms</div>
                            <TooltipComponent className="tooltip-box"  content='Onboard now and start using any platform you like' tipPointerPosition='Start' target='#target'>
                            <div class="menuItem menuSphere flexBox-center" style={{widows:"267px"}} id='target'>ONBOARD NOW</div>
                            </TooltipComponent>
                        </div>
                        <div class="liner"></div>
                        <div class="flexBox-space-around flex-wrap exploreWrap">
                            <div class="flexBox-center">
                                <MonetizationOnIcon />
                                <div class="lightBlackText">Discover Financial platforms</div>
                            </div>
                            <ChevronRightIcon />
                            <div class="flexBox-center">
                                <FlipToFrontIcon />
                                <div class="lightBlackText">select your favourite</div>
                            </div>
                            <ChevronRightIcon />
                            <div class="flexBox-center">
                                <FlashOnIcon />
                                <div class="lightBlackText">Get credentials instantly</div>
                            </div>
                        </div>
                        <div class="flexBox-space flexWrap tilter"></div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Header
