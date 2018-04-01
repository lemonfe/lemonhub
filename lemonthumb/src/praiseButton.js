class PraiseButton {
    constructor(num = 0) {
        this.praiseNum = num;
    }

    like() {
        this.praiseNum += 1;
        this.renderNum(this.praiseNum);
    }

    unlike() {
        this.praiseNum -= 1;
        this.renderNum(this.praiseNum);
    }

    renderNum(num) {
    }
}

export default PraiseButton;