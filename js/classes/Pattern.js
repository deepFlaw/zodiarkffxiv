class Pattern
{
    constructor(scene, rotation, animationDelay) {
        this.scene = scene;
        this.rotation = rotation;
        this.animationDelay = animationDelay;
    }
    preDraw() {}
    postDraw() {}
    checkClick() {
        return true;
    }
    reset() {}
	retry() {}
}

export default Pattern;