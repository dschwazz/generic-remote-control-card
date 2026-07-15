function getRemoteStyle_directv_stream(config) {
   const template = config.remote_template;
   const base_url = `/hacsfiles/generic-remote-control-card/remotes/${template}`;

  return `
    ha-card{
    	background-color:transparent;
    	box-shadow:var(--paper-material-elevation-0_-_box-shadow);
    }
    body {
	margin: 0;
	padding: 20px;
	font-family: "Helvetica Neue", Helvetica, Arial, Geneva, sans-serif
}

.container {
	width: 360px;
	margin: 0 auto
}

#remote-control-directv_stream {
	position: relative;
	background: url(${base_url}/directv_stream.png) no-repeat;
	width: 332px;
	height: 1110px
}

#remote-control-directv_stream h2,
#remote-control-directv_stream span {
	position: absolute;
	left: 5000px
}

#remote-control-directv_stream ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#pwr a,
#ipt a,
#pwr1 a,
#gde a,
#home a,
#dvr a,
#rec a,
#up a,
#exit a,
#left a,
#select a,
#right a,
#back a,
#down a,
#menu a,
#volup a,
#voldown a,
#chup a,
#chdown a,
#mute a,
#mic a,
#prev a,
#rwd a,
#play a,
#fwd a,
#one a,
#two a,
#three a,
#four a,
#five a,
#six a,
#seven a,
#eight a,
#nine a,
#zero a,
#apps a {
	position: absolute;
	display: block
}

#remote-control-directv_stream li#pwr a {
    left: 34px;
    top: 85px;
    width: 90px;
    height: 51px;
	background: url(${base_url}/pwr.png) no-repeat
}

#remote-control-directv_stream li#ipt a {
    left: 124px;
    top: 85px;
    width: 85px;
    height: 51px;
	background: url(${base_url}/ipt.png) no-repeat
}

#remote-control-directv_stream li#pwr1 a {
    left: 209px;
    top: 85px;
    width: 85px;
    height: 51px;
	background: url(${base_url}/pwr1.png) no-repeat
}

#remote-control-directv_stream li#gde a {
    left: 34px;
    top: 243px;
    width: 90px;
    height: 51px;
	background: url(${base_url}/gde.png) no-repeat
}

#remote-control-directv_stream li#home a {
    left: 124px;
    top: 243px;
    width: 85px;
    height: 51px;
	background: url(${base_url}/home.png) no-repeat
}

#remote-control-directv_stream li#dvr a {
    left: 213px;
    top: 243px;
    width: 90px;
    height: 51px;
	background: url(${base_url}/dvr.png) no-repeat
}

#remote-control-directv_stream li#rec a {
    left: 69px;
    top: 308px;
    width: 65px;
    height: 75px;
	background: url(${base_url}/rec.png) no-repeat
}

#remote-control-directv_stream li#up a {
    left: 134px;
    top: 308px;
    width: 65px;
    height: 75px;
	background: url(${base_url}/up.png) no-repeat
}

#remote-control-directv_stream li#exit a {
    left: 199px;
    top: 308px;
    width: 65px;
    height: 75px;
	background: url(${base_url}/exit.png) no-repeat
}

#remote-control-directv_stream li#left a {
    left: 69px;
    top: 383px;
    width: 65px;
    height: 75px;
	background: url(${base_url}/left.png) no-repeat
}

#remote-control-directv_stream li#select a {
    left: 134px;
    top: 383px;
    width: 63px;
    height: 75px;
	background: url(${base_url}/select.png) no-repeat
}

#remote-control-directv_stream li#right a {
    left: 200px;
    top: 383px;
    width: 63px;
    height: 75px;
	background: url(${base_url}/right.png) no-repeat
}

#remote-control-directv_stream li#back a {
    left: 69px;
    top: 459px;
    width: 65px;
    height: 75px;
	background: url(${base_url}/back.png) no-repeat
}

#remote-control-directv_stream li#down a {
    left: 134px;
    top: 459px;
    width: 65px;
    height: 75px;
	background: url(${base_url}/down.png) no-repeat
}

#remote-control-directv_stream li#menu a {
    left: 200px;
    top: 459px;
    width: 65px;
    height: 75px;
	background: url(${base_url}/menu.png) no-repeat
}

#remote-control-directv_stream li#volup a {
    left: 40px;
    top: 534px;
    width: 75px;
    height: 30px;
	background: url(${base_url}/volup.png) no-repeat
}

#remote-control-directv_stream li#voldown a {
    left: 40px;
    top: 590px;
    width: 75px;
    height: 30px;
	background: url(${base_url}/voldown.png) no-repeat
}

#remote-control-directv_stream li#chup a {
    left: 220px;
    top: 534px;
    width: 75px;
    height: 30px;
	background: url(${base_url}/chup.png) no-repeat
}

#remote-control-directv_stream li#chdown a {
    left: 220px;
    top: 590px;
    width: 75px;
    height: 30px;
	background: url(${base_url}/chdown.png) no-repeat
}

#remote-control-directv_stream li#mute a {
    left: 35px;
    top: 631px;
    width: 75px;
    height: 30px;
	background: url(${base_url}/mute.png) no-repeat
}

#remote-control-directv_stream li#mic a {
    left: 130px;
    top: 575px;
    width: 68px;
    height: 98px;
	background: url(${base_url}/mic.png) no-repeat
}

#remote-control-directv_stream li#prev a {
    left: 220px;
    top: 631px;
    width: 75px;
    height: 30px;
	background: url(${base_url}/prev.png) no-repeat
}

#remote-control-directv_stream li#rwd a {
    left: 35px;
    top: 700px;
    width: 75px;
    height: 30px;
	background: url(${base_url}/rwd.png) no-repeat
}

#remote-control-directv_stream li#play a {
    left: 130px;
    top: 700px;
    width: 75px;
    height: 30px;
	background: url(${base_url}/play.png) no-repeat
}

#remote-control-directv_stream li#fwd a {
    left: 220px;
    top: 700px;
    width: 75px;
    height: 30px;
	background: url(${base_url}/fwd.png) no-repeat
}

#remote-control-directv_stream li#one a {
    left: 38px;
    top: 753px;
    width: 73px;
    height: 64px;
	background: url(${base_url}/1.png) no-repeat
}

#remote-control-directv_stream li#two a {
    left: 132px;
    top: 756px;
    width: 73px;
    height: 64px;
	background: url(${base_url}/2.png) no-repeat
}

#remote-control-directv_stream li#three a {
    left: 220px;
    top: 753px;
    width: 73px;
    height: 64px;
	background: url(${base_url}/3.png) no-repeat
}

#remote-control-directv_stream li#four a {
    left: 38px;
    top: 826px;
    width: 73px;
    height: 64px;
	background: url(${base_url}/4.png) no-repeat
}

#remote-control-directv_stream li#five a {
    left: 132px;
    top: 824px;
    width: 73px;
    height: 64px;
	background: url(${base_url}/5.png) no-repeat
}

#remote-control-directv_stream li#six a {
    left: 220px;
    top: 821px;
    width: 73px;
    height: 64px;
	background: url(${base_url}/6.png) no-repeat
}

#remote-control-directv_stream li#seven a {
    left: 38px;
    top: 893px;
    width: 73px;
    height: 64px;
	background: url(${base_url}/7.png) no-repeat
}

#remote-control-directv_stream li#eight a {
    left: 132px;
    top: 892px;
    width: 73px;
    height: 64px;
	background: url(${base_url}/8.png) no-repeat
}

#remote-control-directv_stream li#nine a {
    left: 220px;
    top: 891px;
    width: 73px;
    height: 64px;
	background: url(${base_url}/9.png) no-repeat
}

#remote-control-directv_stream li#zero a {
    left: 132px;
    top: 961px;
    width: 73px;
    height: 64px;
	background: url(${base_url}/0.png) no-repeat
}

#remote-control-directv_stream li#apps a {
    left: 224px;
    top: 960px;
    width: 68px;
    height: 65px;
	background: url(${base_url}/apps.png) no-repeat
}


#remote-control-directv_stream li#pwr a:hover {
	background: url(${base_url}/pwr_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#ipt a:hover {
	background: url(${base_url}/ipt_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#pwr1 a:hover {
	background: url(${base_url}/pwr1_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#gde a:hover {
	background: url(${base_url}/gde_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#home a:hover {
	background: url(${base_url}/home_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#dvr a:hover {
	background: url(${base_url}/dvr_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#rec a:hover {
	background: url(${base_url}/rec_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#up a:hover {
	background: url(${base_url}/up_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#exit a:hover {
	background: url(${base_url}/exit_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#left a:hover {
	background: url(${base_url}/left_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#select a:hover {
	background: url(${base_url}/select_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#right a:hover {
	background: url(${base_url}/right_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#back a:hover {
	background: url(${base_url}/back_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#down a:hover {
	background: url(${base_url}/down_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#menu a:hover {
	background: url(${base_url}/menu_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#volup a:hover {
	background: url(${base_url}/volup_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#voldown a:hover {
	background: url(${base_url}/voldown_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#chup a:hover {
	background: url(${base_url}/chup_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#chdown a:hover {
	background: url(${base_url}/chdown_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#mute a:hover {
	background: url(${base_url}/mute_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#mic a:hover {
	background: url(${base_url}/mic_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#prev a:hover {
	background: url(${base_url}/prev_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#rwd a:hover {
	background: url(${base_url}/rwd_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#play a:hover {
	background: url(${base_url}/play_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#fwd a:hover {
	background: url(${base_url}/fwd_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#apps a:hover {
	background: url(${base_url}/apps_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#one a:hover {
	background: url(${base_url}/1_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#two a:hover {
	background: url(${base_url}/2_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#three a:hover {
	background: url(${base_url}/3_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#four a:hover {
	background: url(${base_url}/4_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#five a:hover {
	background: url(${base_url}/5_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#six a:hover {
	background: url(${base_url}/6_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#seven a:hover {
	background: url(${base_url}/7_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#eight a:hover {
	background: url(${base_url}/8_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#nine a:hover {
	background: url(${base_url}/9_over.png) no-repeat 0px 0px
}

#remote-control-directv_stream li#zero a:hover {
	background: url(${base_url}/0_over.png) no-repeat 0px 0px
}
  `;
}

function getRemoteHtml_directv_stream(config){
 const template = config.remote_template;
 return `

 <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-directv_stream">
				<h2>
					Main navigation
				</h2>
				<ul>
					<li id="pwr" class="myButton-${template}"><a href="#" title="pwr"><span>pwr</span></a></li>
					<li id="ipt" class="myButton-${template}"><a href="#" title="ipt"><span>ipt</span></a></li>
					<li id="pwr1" class="myButton-${template}"><a href="#" title="pwr1"><span>pwr1</span></a></li>
					<li id="gde" class="myButton-${template}"><a href="#" title="gde"><span>gde</span></a></li>
					<li id="home" class="myButton-${template}"><a href="#" title="home"><span>home</span></a></li>
					<li id="dvr" class="myButton-${template}"><a href="#" title="dvr"><span>dvr</span></a></li>
					<li id="rec" class="myButton-${template}"><a href="#" title="rec"><span>rec</span></a></li>
					<li id="up" class="myButton-${template}"><a href="#" title="up"><span>up</span></a></li>
					<li id="exit" class="myButton-${template}"><a href="#" title="exit"><span>exit</span></a></li>
					<li id="left" class="myButton-${template}"><a href="#" title="left"><span>left</span></a></li>
					<li id="select" class="myButton-${template}"><a href="#" title="select"><span>select</span></a></li>
					<li id="right" class="myButton-${template}"><a href="#" title="right"><span>right</span></a></li>
					<li id="back" class="myButton-${template}"><a href="#" title="back"><span>back</span></a></li>
					<li id="down" class="myButton-${template}"><a href="#" title="down"><span>down</span></a></li>
					<li id="menu" class="myButton-${template}"><a href="#" title="menu"><span>menu</span></a></li>
					<li id="volup" class="myButton-${template}"><a href="#" title="volup"><span>volup</span></a></li>
					<li id="voldown" class="myButton-${template}"><a href="#" title="voldown"><span>voldown</span></a></li>
					<li id="chup" class="myButton-${template}"><a href="#" title="chup"><span>chup</span></a></li>
					<li id="chdown" class="myButton-${template}"><a href="#" title="chdown"><span>chdown</span></a></li>
					<li id="mute" class="myButton-${template}"><a href="#" title="mute"><span>mute</span></a></li>
					<li id="mic" class="myButton-${template}"><a href="#" title="mic"><span>mic</span></a></li>
					<li id="prev" class="myButton-${template}"><a href="#" title="prev"><span>prev</span></a></li>
					<li id="rwd" class="myButton-${template}"><a href="#" title="rwd"><span>rwd</span></a></li>
					<li id="play" class="myButton-${template}"><a href="#" title="play"><span>play</span></a></li>
					<li id="fwd" class="myButton-${template}"><a href="#" title="fwd"><span>fwd</span></a></li>
					<li id="zero" class="myButton-${template}"><a href="#" title="zero"><span>0</span></a></li>
                    <li id="one" class="myButton-${template}"><a href="#" title="one"><span>1</span></a></li>
                    <li id="two" class="myButton-${template}"><a href="#" title="two"><span>2</span></a></li>
                    <li id="three" class="myButton-${template}"><a href="#" title="three"><span>3</span></a></li>
                    <li id="four" class="myButton-${template}"><a href="#" title="four"><span>4</span></a></li>
                    <li id="five" class="myButton-${template}"><a href="#" title="five"><span>5</span></a></li>
                    <li id="six" class="myButton-${template}"><a href="#" title="six"><span>6</span></a></li>
                    <li id="seven" class="myButton-${template}"><a href="#" title="seven"><span>7</span></a></li>
                    <li id="eight" class="myButton-${template}"><a href="#" title="eight"><span>8</span></a></li>
                    <li id="nine" class="myButton-${template}"><a href="#" title="nine"><span>9</span></a></li>
                    <li id="apps" class="myButton-${template}"><a href="#" title="apps"><span>apps</span></a></li>
				</ul>
			</div>
		</div>

`;
}
