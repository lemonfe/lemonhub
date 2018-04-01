import PraiseButton from './PraiseButton.js';

class Thumb extends PraiseButton {
    constructor(ele) {
        super();
        this.ele = ele;
        this.node = `
            <div class="base unlike">
		        <div class="mid"></div>
		        <div class="thumb"></div>
	        </div>
	        <div class="num">${this.praiseNum}</div>
        `;

        $(ele).append($(this.node));

        $(ele).find('.base').on('click', this.likeToggle.bind(this));

    }

    likeToggle() {
        const flag = $(this.node).find('.unlike')? 1 : 0;
        if(flag) {
            console.log('点赞');
            this.like();
        }
        // else{
        //     console.log('取消点赞');
        //     this.unlike();
        // }
    }

    renderNum(num) {
        super.renderNum(num);
        $(this.ele).find('.num').text(num);
    }
}

export default Thumb;


