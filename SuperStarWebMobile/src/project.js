window.__require=function t(e,r,a){function o(s,n){if(!r[s]){if(!e[s]){var c=s.split("/");if(c=c[c.length-1],!e[c]){var p="function"==typeof __require&&__require;if(!n&&p)return p(c,!0);if(i)return i(c,!0);throw new Error("Cannot find module '"+s+"'")}}var h=r[s]={exports:{}};e[s][0].call(h.exports,function(t){return o(e[s][1][t]||t)},h,h.exports,t,e,r,a)}return r[s].exports}for(var i="function"==typeof __require&&__require,s=0;s<a.length;s++)o(a[s]);return o}({ChapterPass:[function(t,e,r){"use strict";cc._RF.push(e,"5af10E9U8tGhqI4zkAAaz4l","ChapterPass"),Object.defineProperty(r,"__esModule",{value:!0});var a=cc._decorator,o=a.ccclass,i=a.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.chapterLabel=null,e.targetLabel=null,e.gameover=null,e}return __extends(e,t),e.prototype.load=function(){this.node.setPosition(434,86)},e.prototype.showPass=function(t,e,r){this.gameover.opacity=0,this.chapterLabel.string="\u5173\u5361\uff1a"+t.toString(),this.targetLabel.string="\u76ee\u6807\u5206\u6570\uff1a"+e.toString(),this.showAction(r)},e.prototype.showOver=function(t){this.gameover.opacity=255,this.chapterLabel.string="",this.targetLabel.string="",this.showAction(t)},e.prototype.showAction=function(t){this.node.setPosition(434,86);var e=cc.moveTo(3,cc.v2(-434,86)),r=cc.sequence(e,cc.callFunc(function(){t&&t()}));this.node.runAction(r)},__decorate([i(cc.Label)],e.prototype,"chapterLabel",void 0),__decorate([i(cc.Label)],e.prototype,"targetLabel",void 0),__decorate([i(cc.Node)],e.prototype,"gameover",void 0),e=__decorate([o],e)}(cc.Component);r.default=s,cc._RF.pop()},{}],Define:[function(t,e,r){"use strict";cc._RF.push(e,"75b4fJpvKBPnpVyrT+b7j87","Define"),Object.defineProperty(r,"__esModule",{value:!0}),function(t){t.StarInitMoveV=25,t.StarWidth=48,t.StarHeight=48,t.StarNumberH=10,t.StarNumberV=10,t.StarMoveSpeed=360,t.StarType=cc.Enum({Red:0,Yellow:1,Blue:2,Green:3,Pur:4}),t.GameState=cc.Enum({init:0,wait:1,moving:2,over:3}),t.AwardMap=[2e3,1980,1920,1820,1680,1500,1280,1020,720,380]}(r.Define||(r.Define={})),cc._RF.pop()},{}],GameData:[function(t,e,r){"use strict";cc._RF.push(e,"6b8480LekpIOJS5IZh+RpEv","GameData"),Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function t(){this._chapter=0,this._score=0,this._starPattern="",this._isNewGame=!1,this.removeStorageData=function(){cc.log("removeStorageData"),cc.sys.localStorage.setItem("superstar_cur_chapter",""),cc.sys.localStorage.setItem("superstar_cur_score",""),cc.sys.localStorage.setItem("superstar_cur_pattern",""),cc.sys.localStorage.setItem("superstar_history","")}}return Object.defineProperty(t.prototype,"chapter",{get:function(){return this._chapter},set:function(t){this._chapter=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"score",{get:function(){return this._score},set:function(t){this._score=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"starPattern",{get:function(){return this._starPattern},set:function(t){this._starPattern=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isNewGame",{get:function(){return this._isNewGame},set:function(t){this._isNewGame=t},enumerable:!0,configurable:!0}),t.prototype.reset=function(t){void 0===t&&(t=!1),cc.log("reset\u5f53\u524d\u6570\u636e"),this.chapter=1,this.score=0,this._starPattern="",t&&this.saveCurrentData("")},t.getInstance=function(){return this.instance||(this.instance=new t),this.instance},t.prototype.isChapterPass=function(){return this.score>=this.getTargetScore()},t.prototype.chapterEnd=function(){this.chapter++,this.resetStarPattern()},t.prototype.resetStarPattern=function(){this._starPattern=""},t.prototype.saveCurrentData=function(t){cc.log("\u4fdd\u5b58\u5f53\u524d\u6570\u636e");var e=this.chapter.toString();cc.sys.localStorage.setItem("superstar_cur_chapter",e),e=this.score.toString(),cc.sys.localStorage.setItem("superstar_cur_score",e),this.starPattern=t,cc.sys.localStorage.setItem("superstar_cur_pattern",this.starPattern)},t.prototype.loadCurrentData=function(){cc.log("\u8bfb\u53d6\u5f53\u524d\u6570\u636e"),this.chapter=parseInt(cc.sys.localStorage.getItem("superstar_cur_chapter")),this.score=parseInt(cc.sys.localStorage.getItem("superstar_cur_score")),this.starPattern=cc.sys.localStorage.getItem("superstar_cur_pattern"),cc.log("this.chapter = "+this.chapter),cc.log("this.score = "+this.score),cc.log("this.starPattern = "+this.starPattern),this.chapter&&this.starPattern||this.reset()},t.prototype.getHistoryChapter=function(t){var e=cc.sys.localStorage.getItem("superstar_history");if(!e)return 0;var r=JSON.parse(e);return r&&r[t]?r[t]:0},t.prototype.saveHistoryChapter=function(t){cc.log("\u5bf9\u6bd4\u5e76\u4fdd\u5b58\u6307\u5b9a\u5173\u5361\u7684\u5386\u53f2\u6700\u9ad8\u5206\u8bb0\u5f55");var e=cc.sys.localStorage.getItem("superstar_history");(e=e?JSON.parse(e):{})[t]=this.score;var r=JSON.stringify(e);cc.sys.localStorage.setItem("superstar_history",r)},t.prototype.addScore=function(t){this.score+=t;var e=this.getHistoryChapter(this.chapter);this.score>e&&this.saveHistoryChapter(this.chapter)},t.prototype.getTargetScore=function(){return this.chapter<=9?[500,1e3,2500,4500,7e3,9e3,12e3,14e3,17e3,19e3][this.chapter]:19e3+3e3*(this.chapter-9)},t.prototype.printHistory=function(){var t=cc.sys.localStorage.getItem("superstar_history");cc.log(" history data:  "+JSON.stringify(t))},t.instance=null,t}();r.GameData=a,cc._RF.pop()},{}],Game:[function(t,e,r){"use strict";cc._RF.push(e,"3daeej0PYlD+JiIcXdUUKut","Game"),Object.defineProperty(r,"__esModule",{value:!0});var a=t("./../Util/GameData"),o=cc._decorator,i=o.ccclass,s=o.property,n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.layerStar=null,e.labelChapter=null,e.labelTargetScore=null,e.labelHistory=null,e.labelScore=null,e.labelScoreAdd=null,e.passNode=null,e.pausePrefab=null,e.chapterPass=null,e.sx=1,e.sy=1,e}return __extends(e,t),e.prototype.onLoad=function(){this.passNode.active=!1,this.labelScoreAdd.node.opacity=0,cc.director.on("chapter-start",this.gotoNextChapter,this),cc.director.on("score-refresh",this.scoreRefresh,this),cc.director.on("chapter-pass",this.pass,this),this.startGame(),cc.sys.isBrowser||this.getWindowProperty()},e.prototype.getWindowProperty=function(){var t;t=cc.sys.platform===cc.sys.ANDROID?cc.view.getFrameSize():cc.sys.platform===cc.sys.IPHONE?cc.view.getFrameSize():cc.sys.platform===cc.sys.WECHAT_GAME?cc.view.getCanvasSize():cc.sys.isBrowser?cc.view.getCanvasSize():cc.view.getVisibleSize();var e=cc.view.getDesignResolutionSize(),r=e.width/e.height,a=t.width/t.height;cc.view.setDesignResolutionSize(e.width,e.height,cc.ResolutionPolicy.SHOW_ALL),r<a?this.sx=t.width/(t.height/e.height*e.width):this.sy=t.height/(t.width/e.width*e.height),this.node.scaleX=this.sx,this.node.scaleY=this.sy},e.prototype.onDestroy=function(){cc.director.off("chapter-start",this.startGame,this),cc.director.off("score-refresh",this.scoreRefresh,this),cc.director.off("chapter-pass",this.pass,this)},e.prototype.gotoNextChapter=function(){var t=this;if(a.GameData.getInstance().isChapterPass()){a.GameData.getInstance().chapterEnd();var e=a.GameData.getInstance().chapter,r=a.GameData.getInstance().getTargetScore();this.chapterPass.getComponent("ChapterPass").showPass(e,r,function(){a.GameData.getInstance().isNewGame=!0,t.startGame()})}else this.chapterPass.getComponent("ChapterPass").showOver(function(){a.GameData.getInstance().isNewGame=!0,t.gameover()})},e.prototype.gameover=function(){a.GameData.getInstance().reset(!0),cc.director.loadScene("welcome")},e.prototype.pass=function(){this.passNode.active=!0,this.passNode.setPosition(0,0);var t=cc.moveTo(1,cc.v2(156,229));this.passNode.runAction(t)},e.prototype.scoreRefresh=function(t){if(void 0===t&&(t=0),this.labelChapter.string=a.GameData.getInstance().chapter.toString(),this.labelScore.string=a.GameData.getInstance().score.toString(),this.labelTargetScore.string=a.GameData.getInstance().getTargetScore().toString(),this.labelHistory.string=a.GameData.getInstance().getHistoryChapter(a.GameData.getInstance().chapter).toString(),t>0){this.labelScoreAdd.string=t.toString(),this.labelScoreAdd.node.opacity=255,this.labelScoreAdd.node.stopAllActions();var e=cc.fadeOut(2).easing(cc.easeBounceIn());this.labelScoreAdd.node.runAction(e)}},e.prototype.startGame=function(){this.passNode.active=!1,this.scoreRefresh(),this.layerStar.getComponent("StarController").initStar()},e.prototype.checkPass=function(){a.GameData.getInstance().score>=a.GameData.getInstance().getTargetScore()&&this.pass()},e.prototype.onPause=function(){cc.log("onPause");var t=cc.instantiate(this.pausePrefab);t.parent=this.node,t.zIndex=200},__decorate([s(cc.Node)],e.prototype,"layerStar",void 0),__decorate([s(cc.Label)],e.prototype,"labelChapter",void 0),__decorate([s(cc.Label)],e.prototype,"labelTargetScore",void 0),__decorate([s(cc.Label)],e.prototype,"labelHistory",void 0),__decorate([s(cc.Label)],e.prototype,"labelScore",void 0),__decorate([s(cc.Label)],e.prototype,"labelScoreAdd",void 0),__decorate([s(cc.Node)],e.prototype,"passNode",void 0),__decorate([s(cc.Prefab)],e.prototype,"pausePrefab",void 0),__decorate([s(cc.Node)],e.prototype,"chapterPass",void 0),e=__decorate([i],e)}(cc.Component);r.Game=n,cc._RF.pop()},{"./../Util/GameData":"GameData"}],StarController:[function(t,e,r){"use strict";cc._RF.push(e,"fa79a/wWNVEYL2ojHiKlmRD","StarController"),Object.defineProperty(r,"__esModule",{value:!0});var a=t("./../Util/Define"),o=t("./../Util/GameData"),i=cc._decorator,s=i.ccclass,n=i.property,c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.starPrefab=null,e._gameState=a.Define.GameState.init,e._starList=[],e.starSelect=null,e._starSameLinkList=[],e}return __extends(e,t),e.prototype.onLoad=function(){this.node.parent.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),this.node.parent.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this)},e.prototype.onTouchStart=function(t){if(this._gameState==a.Define.GameState.wait){var e=this.node.convertToNodeSpace(t.getLocation());this.starUnSelectAll();var r=Math.floor(e.x/a.Define.StarWidth),o=Math.floor(e.y/a.Define.StarHeight);this.onStarTouchStart(r,o)}},e.prototype.onTouchEnd=function(t){if(this._gameState==a.Define.GameState.wait){var e=this.node.convertToNodeSpace(t.getLocation()),r=Math.floor(e.x/a.Define.StarWidth),i=Math.floor(e.y/a.Define.StarHeight);if(!(r>=a.Define.StarNumberH||r<0)){var s=this._starList[r][i];if(s&&s===this.starSelect){this.eliminate();var n=this._starSameLinkList.length;if(n>1){var c=o.GameData.getInstance().score>=o.GameData.getInstance().getTargetScore(),p=5*n*n;o.GameData.getInstance().addScore(p),cc.log("\u5f97\u5206:"+p),cc.director.emit("score-refresh",p);var h=o.GameData.getInstance().score>=o.GameData.getInstance().getTargetScore();!c&&h&&cc.director.emit("chapter-pass")}}s=null,this.starSelect=null,this._starSameLinkList.length=0,this.starUnSelectAll()}}},e.prototype.onStarTouchStart=function(t,e){if(cc.log("_x"+t),cc.log("_y"+e),!(t>=a.Define.StarNumberH||t<0)&&(this.starSelect=this._starList[t][e],this.starSelect)){this.starSelect.beSelect(),this._starSameLinkList.length=0,this._starSameLinkList.push(this.starSelect);for(var r=0;r!=this._starSameLinkList.length;){r=this._starSameLinkList.length;for(var o=0;o<this._starSameLinkList.length;o++)for(var i=this._starSameLinkList[o],s=0;s<a.Define.StarNumberV;s++)for(var n=0;n<a.Define.StarNumberH;n++){var c=this._starList[s][n];c&&(this._starSameLinkList.indexOf(c)>-1||i.type==c.type&&(i.x===c.x&&1===Math.abs(i.y-c.y)||i.y===c.y&&1===Math.abs(i.x-c.x))&&this._starSameLinkList.push(c))}}for(s=0;s<this._starSameLinkList.length;s++){(i=this._starSameLinkList[s]).beSelect()}}},e.prototype.eliminate=function(){if(this._starSameLinkList.length>=2){for(var t=0;t<this._starSameLinkList.length;t++){var e=this._starSameLinkList[t];e.clean(),this._starList[e.x][e.y]=null}this.moveDownAndRefreshStarList()}},e.prototype.moveDownAndRefreshStarList=function(){for(var t=this,e=0,r=0,o=0;o<a.Define.StarNumberV;o++){e=0;for(var i=0;i<a.Define.StarNumberH;i++){var s=this._starList[o][i];s?e>0&&(this._gameState!=a.Define.GameState.moving&&(cc.log("\u5f00\u59cb\u79fb\u52a8-\u5411\u4e0b"),this._gameState=a.Define.GameState.moving),e>r&&(r=e),s.moveDown(e),this._starList[o][i]=null,this._starList[o][s.y]=s):e++}}if(r>0){var n=a.Define.StarHeight*r/a.Define.StarMoveSpeed;setTimeout(function(){t.moveLeftAndRefreshStarList()},1e3*n+50)}else this.moveLeftAndRefreshStarList()},e.prototype.moveLeftAndRefreshStarList=function(){var t=this;cc.log("\u68c0\u6d4b\u52a8-\u5411\u5de6");for(var e=0;e<a.Define.StarNumberH-1;e++){for(var r=!0,o=0;o<a.Define.StarNumberV;o++){if(h=this._starList[e][o]){r=!1;break}}if(r){for(var i=!1,s=e+1;s<a.Define.StarNumberH;s++)for(var n=0;n<a.Define.StarNumberV;n++){var c=this._starList[s][n];c&&(i||(i=!0),c.moveLeftCount(),this._starList[s][n]=null,this._starList[c.x][n]=c)}i&&e--}}var p=0;for(e=0;e<a.Define.StarNumberH;e++)for(o=0;o<a.Define.StarNumberV;o++){var h;if(h=this._starList[e][o]){var u=h.moveLeft();u>p&&(p=u)}}if(p>0){var l=a.Define.StarWidth*p/a.Define.StarMoveSpeed;setTimeout(function(){for(var e=0;e<a.Define.StarNumberH-1;e++)for(var r=0;r<a.Define.StarNumberV;r++){var o=t._starList[e][r];o&&o.resetMoveLeftCount()}t.checkGameOver()?t.gameOver():(cc.log("\u53ef\u79fb\u52a8"),t._gameState=a.Define.GameState.wait)},1e3*l+50)}else this.checkGameOver()?setTimeout(function(){t.gameOver()},1e3):(cc.log("\u53ef\u79fb\u52a8"),this._gameState=a.Define.GameState.wait)},e.prototype.checkGameOver=function(){o.GameData.getInstance().saveCurrentData(this.getStarPattern());for(var t=0;t<a.Define.StarNumberV;t++)for(var e=0;e<a.Define.StarNumberH;e++){var r=this._starList[t][e];if(r){var i=null;e+1<a.Define.StarNumberV&&(i=this._starList[t][e+1]);var s=null;e-1>=0&&(s=this._starList[t][e-1]);var n=null;t-1>=0&&(n=this._starList[t-1][e]);var c=null;if(t+1<a.Define.StarNumberH&&(c=this._starList[t+1][e]),i&&i.type===r.type||s&&s.type===r.type||n&&n.type===r.type||c&&c.type===r.type)return!1}}return!0},e.prototype.gameOver=function(){cc.log("gameOver"),this._gameState=a.Define.GameState.over,this.checkAward()},e.prototype.getNumberLeft=function(){for(var t=0,e=0;e<a.Define.StarNumberV;e++)for(var r=0;r<a.Define.StarNumberH;r++){this._starList[e][r]&&t++}return t},e.prototype.checkAward=function(){var t=this,e=this.getNumberLeft();if(e<a.Define.AwardMap.length){var r=a.Define.AwardMap[e];cc.log("\u989d\u5916\u5956\u52b1:"+r),o.GameData.getInstance().addScore(r),cc.director.emit("score-refresh",r),setTimeout(function(){t.getAwardOne()},1e3)}else cc.log("\u6ca1\u6709\u5956\u52b1"),setTimeout(function(){for(var e=0;e<a.Define.StarNumberV;e++)for(var r=0;r<a.Define.StarNumberH;r++){var o=t._starList[e][r];o&&o.clean()}setTimeout(function(){t.gotoNext()},1e3)},1e3)},e.prototype.getAwardOne=function(){var t=this;cc.log("getAwardOne");for(var e=!1,r=0;r<a.Define.StarNumberV;r++){for(var o=0;o<a.Define.StarNumberH;o++){var i=this._starList[r][o];if(i){i.clean(),this._starList[r][o]=null,e=!0;break}}if(e)break}e?setTimeout(function(){t.getAwardOne()},100):this.gotoNext()},e.prototype.gotoNext=function(){cc.director.emit("chapter-start")},e.prototype.onDestroy=function(){cc.log(" StarController clean ")},e.prototype.cleanStar=function(){cc.log(" StarController cleanStar ");for(var t=0;t<a.Define.StarNumberV;t++)for(var e=0;e<a.Define.StarNumberH;e++){var r=this._starList[t][e];r&&r.clean()}},e.prototype.starUnSelectAll=function(){for(var t=0;t<a.Define.StarNumberV;t++)for(var e=0;e<a.Define.StarNumberH;e++){var r=this._starList[t][e];r&&r.unSelect()}},e.prototype.initStar=function(){var t=this;if(o.GameData.getInstance().isNewGame)this.createStarsRandom();else{var e=o.GameData.getInstance().starPattern;if(0===e.length)this.createStarsRandom();else{for(var r=e.split("#"),i=0;i<a.Define.StarNumberV;i++)this._starList[i]=[];for(i=0;i<r.length;i++){var s=parseInt(r[i]),n=Math.floor(i/a.Define.StarNumberH),c=i%a.Define.StarNumberH;if(n>=a.Define.StarNumberH)break;if(-1===s)this._starList[n][c]=null;else{var p=cc.instantiate(this.starPrefab);p.parent=this.node,p.getComponent("Star").init(s,n,c,a.Define.StarInitMoveV),this._starList[n].push(p.getComponent("Star"))}}}}var h=a.Define.StarInitMoveV/a.Define.StarMoveSpeed;setTimeout(function(){t._gameState=a.Define.GameState.wait},h),o.GameData.getInstance().score>=o.GameData.getInstance().getTargetScore()&&cc.director.emit("chapter-pass"),this.checkGameOver()?this.gameOver():(cc.log("\u53ef\u79fb\u52a8"),this._gameState=a.Define.GameState.wait)},e.prototype.createStarsRandom=function(){for(var t=0;t<a.Define.StarNumberV;t++){this._starList[t]=[];for(var e=0;e<a.Define.StarNumberH;e++){var r=cc.instantiate(this.starPrefab);r.parent=this.node,r.getComponent("Star").init(Math.floor(5*Math.random()),t,e,a.Define.StarInitMoveV),this._starList[t].push(r.getComponent("Star"))}}},e.prototype.getStarPattern=function(){for(var t="",e=0;e<a.Define.StarNumberV;e++)for(var r=0;r<a.Define.StarNumberH;r++){var o=this._starList[e][r];t+=o?o.type+"#":"-1#"}return t},__decorate([n(cc.Prefab)],e.prototype,"starPrefab",void 0),e=__decorate([s],e)}(cc.Component);r.StarController=c,cc._RF.pop()},{"./../Util/Define":"Define","./../Util/GameData":"GameData"}],Star:[function(t,e,r){"use strict";cc._RF.push(e,"2d6ccZs5dJHubIYzI8/WefV","Star"),Object.defineProperty(r,"__esModule",{value:!0});var a=t("./../Util/Define"),o=cc._decorator,i=o.ccclass,s=o.property,n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.particlePrefab=null,e.spriteList=[],e._type=a.Define.StarType.Red,e._x=0,e._y=0,e.selectPic=null,e._moveLeftCount=0,e}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return this._type},set:function(t){this._type=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t},enumerable:!0,configurable:!0}),e.prototype.onLoad=function(){},e.prototype.onDestroy=function(){this.spriteList.length=0,this.type=0,this.x=0,this.y=0},e.prototype.init=function(t,e,r,a){this.type=t,this.x=e,this.y=r,this.node.getComponent(cc.Sprite).spriteFrame=this.spriteList[this.type],this.refreshPosition(0,a),this.move()},e.prototype.refreshPosition=function(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.node.setPosition(a.Define.StarWidth*this.x+t,a.Define.StarHeight*this.y+e)},e.prototype.beSelect=function(){this.selectPic.node.active||(this.selectPic.node.active=!0)},e.prototype.unSelect=function(){this.selectPic.node.active&&(this.selectPic.node.active=!1)},e.prototype.clean=function(){this.showParticleEffect(),this.node.destroy()},e.prototype.print=function(){var t="";switch(this.type){case a.Define.StarType.Red:t="\u7ea2";break;case a.Define.StarType.Yellow:t="\u9ec4";break;case a.Define.StarType.Blue:t="\u84dd";break;case a.Define.StarType.Green:t="\u7eff";break;case a.Define.StarType.Pur:t="\u7d2b"}cc.log(t)},e.prototype.move=function(){var t=this.node.getPosition(),e=cc.v2(a.Define.StarWidth*this.x,a.Define.StarHeight*this.y),r=Math.abs(t.y-e.y)/a.Define.StarMoveSpeed,o=cc.moveTo(r,cc.v2(t.x,e.y)),i=Math.abs(t.x-e.x)/a.Define.StarMoveSpeed,s=cc.moveTo(i,cc.v2(e.x,e.y)),n=cc.sequence(o,s,cc.callFunc(function(){}));this.node.runAction(n)},e.prototype.moveDown=function(t){this.y-=t;var e=this.node.getPosition(),r=cc.v2(e.x,e.y-a.Define.StarHeight*t),o=a.Define.StarHeight*t/a.Define.StarMoveSpeed,i=cc.moveTo(o,cc.v2(e.x,r.y));this.node.runAction(i)},e.prototype.resetMoveLeftCount=function(){this._moveLeftCount=0},e.prototype.moveLeftCount=function(){this.x--,this._moveLeftCount++},e.prototype.moveLeft=function(){if(!(this._moveLeftCount<=0)){var t=this.node.getPosition(),e=cc.v2(t.x-a.Define.StarWidth*this._moveLeftCount,t.y),r=a.Define.StarWidth*this._moveLeftCount/a.Define.StarMoveSpeed,o=cc.moveTo(r,cc.v2(e.x,t.y));return this.node.runAction(o),this._moveLeftCount}},e.prototype.showParticleEffect=function(){var t=cc.instantiate(this.particlePrefab);t.getComponent(cc.ParticleSystem).startColor=this.getColor(),t.parent=this.node.parent,t.zIndex=100,t.setPosition(this.node.getPosition().x+a.Define.StarWidth/2,this.node.getPosition().y+a.Define.StarHeight/2)},e.prototype.getColor=function(){switch(this.type){case a.Define.StarType.Pur:return cc.color(189,77,255,255);case a.Define.StarType.Blue:return cc.color(84,203,254,255);case a.Define.StarType.Red:return cc.color(253,80,126,255);case a.Define.StarType.Yellow:return cc.color(253,234,84,255);case a.Define.StarType.Green:return cc.color(132,226,111,255)}return cc.color(255,255,255,255)},e.prototype.getDistance=function(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))},__decorate([s(cc.Prefab)],e.prototype,"particlePrefab",void 0),__decorate([s([cc.SpriteFrame])],e.prototype,"spriteList",void 0),__decorate([s({type:a.Define.StarType})],e.prototype,"_type",void 0),__decorate([s(cc.Integer)],e.prototype,"_x",void 0),__decorate([s],e.prototype,"_y",void 0),__decorate([s(cc.Sprite)],e.prototype,"selectPic",void 0),e=__decorate([i],e)}(cc.Component);r.Star=n,cc._RF.pop()},{"./../Util/Define":"Define"}],Tips:[function(t,e,r){"use strict";cc._RF.push(e,"ec9421cAjdDxolp9n4lnXsN","Tips"),Object.defineProperty(r,"__esModule",{value:!0});var a=cc._decorator,o=a.ccclass,i=a.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e}return __extends(e,t),e.prototype.load=function(){},e.prototype.onClick=function(){this.node.removeFromParent(),this.node.destroy()},e.prototype.setText=function(t){this.label.string=t},__decorate([i(cc.Label)],e.prototype,"label",void 0),e=__decorate([o],e)}(cc.Component);r.default=s,cc._RF.pop()},{}],Welcome:[function(t,e,r){"use strict";cc._RF.push(e,"8209f69Jm1F2JJeE28/FjZd","Welcome"),Object.defineProperty(r,"__esModule",{value:!0});var a=t("./../Util/GameData"),o=cc._decorator,i=o.ccclass,s=o.property,n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tipsPrefab=null,e._tipSHow=!1,e.sx=1,e.sy=1,e}return __extends(e,t),e.prototype.onLoad=function(){a.GameData.getInstance().loadCurrentData(),cc.sys.isBrowser||this.getWindowProperty()},e.prototype.getWindowProperty=function(){var t;t=cc.sys.platform===cc.sys.ANDROID?cc.view.getFrameSize():cc.sys.platform===cc.sys.IPHONE?cc.view.getFrameSize():cc.sys.platform===cc.sys.WECHAT_GAME?cc.view.getCanvasSize():cc.sys.isBrowser?cc.view.getCanvasSize():cc.view.getVisibleSize();var e=cc.view.getDesignResolutionSize(),r=e.width/e.height,a=t.width/t.height;cc.view.setDesignResolutionSize(e.width,e.height,cc.ResolutionPolicy.SHOW_ALL),r<a?this.sx=t.width/(t.height/e.height*e.width):this.sy=t.height/(t.width/e.width*e.height),this.node.scaleX=this.sx,this.node.scaleY=this.sy},e.prototype.onButtonStart=function(){var t=a.GameData.getInstance().starPattern;if(!this._tipSHow&&t.length>0){this._tipSHow=!0,cc.log("\u63d0\u793a");var e=cc.instantiate(this.tipsPrefab);return e.parent=this.node,e.zIndex=200,void e.getComponent("Tips").setText("\u6709\u4e0a\u4e00\u6b21\u7684\u6e38\u620f\u8bb0\u5f55\uff0c\u518d\u6b21\u70b9\u51fb[\u65b0\u6e38\u620f]\u6309\u94ae\u5f00\u59cb\u65b0\u7684\u6e38\u620f\uff1f")}a.GameData.getInstance().isNewGame=!0,a.GameData.getInstance().reset(),cc.director.loadScene("game")},e.prototype.onButtonContinue=function(){a.GameData.getInstance().isNewGame=!1,cc.director.loadScene("game")},__decorate([s(cc.Prefab)],e.prototype,"tipsPrefab",void 0),e=__decorate([i],e)}(cc.Component);r.default=n,cc._RF.pop()},{"./../Util/GameData":"GameData"}],pauseNode:[function(t,e,r){"use strict";cc._RF.push(e,"a392blDOpNDQp23pQe4C3AR","pauseNode"),Object.defineProperty(r,"__esModule",{value:!0});var a=cc._decorator,o=a.ccclass,i=(a.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.load=function(){},e.prototype.onBackgroundClick=function(){},e.prototype.onClose=function(){this.node.removeFromParent(),this.node.destroy()},e.prototype.onContinue=function(){this.onClose()},e.prototype.onHome=function(){cc.director.loadScene("welcome")},e=__decorate([o],e)}(cc.Component));r.default=i,cc._RF.pop()},{}]},{},["ChapterPass","Star","StarController","Tips","pauseNode","Game","Welcome","Define","GameData"]);