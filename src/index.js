import TabView from './TabView.js';
import TabsView from './secondPage/TabsView.js';
import ScrollView from './ScrollView.js';
import Div from './Div.js';
import ShopTitle from './firstPage/ShopTitle.js';
import ShopMedium from './secondPage/ShopMedium.js';
// import ShopMediumTwo from './secondPage/ShopMediumTwo.js';
import ShopLarge from './firstPage/ShopLarge.js';
import ShopSmallView from './firstPage/ShopSmallView.js';
import {create} from './create.js';
import {CarouselView} from './firstPage/CarouselView.js';


function loadMore(){
    setTimeout(()=>{
        this.setAttribute("placeHolderText", "没有更多啦！");
    }, 5000);
}

window.render = function (data,data1,root) {
    let c = <TabView style='width：100%;height:100%; padding:0px 35px;'>
        <ScrollView tab-title="推荐"  placeHolderText="load more" on-scrolToBottom={loadMore}   style='-webkit-overflow-scrolling:touch;overflow:scroll;white-space:normal;font-size:46px;'>
            <CarouselView data={data.focusData}></CarouselView>
            <ShopTitle></ShopTitle>
            <ShopSmallView data = {data.mostFavourateShops}></ShopSmallView>
            <ShopLarge data={data.recommendedShops[0]}></ShopLarge> 
            <ShopLarge data={data.recommendedShops[1]}></ShopLarge> 
            <ShopLarge data={data.recommendedShops[2]}></ShopLarge> 
        </ScrollView>
        <ScrollView tab-title="有趣的店" style='white-space:normal;font-size:46px;'>
            <TabsView tabs-text='新奇好店都在这'>
                <Div tabs-title="全部">
                    <ShopMedium data={[data1.interestingShops[0],data1.interestingShops[1],data1.interestingShops[2]]}></ShopMedium>
                    <ShopMedium data={[data1.interestingShops[3],data1.interestingShops[4],data1.interestingShops[5]]} float="right"></ShopMedium>
                    <ShopMedium data={[data1.interestingShops[6],data1.interestingShops[7],data1.interestingShops[8]]}></ShopMedium>
                </Div>
                <Div tabs-title="小惊喜">
                小惊喜 小惊喜 小惊喜
                </Div>
                <Div tabs-title="想不到">
                想不到 想不到 想不到
                </Div>
            </TabsView>
        </ScrollView> 
        <ScrollView tab-title="品牌新店" style='white-space:normal;background-color:pink;font-size:46px;'>
        </ScrollView>
        <ScrollView tab-title="发现" style='white-space:normal;background-color:lightGreen;font-size:46px;'>
        </ScrollView>
    </TabView>;
    c.appendTo(document.body);
};
