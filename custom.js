/**
 * 
 */

function check(){
	var ck_id = name1.value;	// 이름
	var ck_pn = hp.value;	// 연락처
	var ck_into = into.value;	// 지원동기
	var ck_email = email.value;	// 이메일
	var sp_01 = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/;	// @ 포함 여부 정규식
	var sp_02 = /^[a-zA-Z0-9]+.[a-zA-Z0-9]+$/;	// . 포함 여부 정규식
	
	/////////////////////////////////////////////////////////////////
	
	// 이름 공백 체크
	if(ck_id==''){
		alert("이름을 입력하세요.");
		name.focus();
		return;
	}
	
	/////////////////////////////////////////////////////////////////
	
	// 연락처 공백 체크
	if(ck_pn==''){
		alert("연락처를 입력하세요.");
		hp.focus();
		return;
	}
	
	// 연락처 길이 체크
	if(ck_pn.length<10){
		alert("연락처는 10자리 이상이 되어야 합니다.");
		hp.focus();
		return;
	}
	
	// 연락처 숫자만 가능 체크
	for(var i=0; i<ck_pn.length; i++){
		if(!(ck_pn.charAt(i)>=0 && ck_pn.charAt(i)<=9)){
			alert("전화번호는 숫자만 입력할 수 있습니다.");
			hp.focus();
			return;
		}
	}
	
	/////////////////////////////////////////////////////////////////
	
	// 이메일 공백 체크
	if(ck_email==''){
		alert("이메일 주소를 입력하세요.");
		email.focus();
		return;
	}
	
	// 이메일 길이 체크
	if(ck_email.length<2){
		alert("이메일은 2자리 이상이 되어야 합니다.");
		email.focus();
		return;
	}
	
	// 이메일 특수문자 체크
	if(ck_email.test(sp_01)){
		alert("이메일은 @가 포함 되어야 합니다.");
		email.focus();
		return;
	}
	
	/////////////////////////////////////////////////////////////////
	
	// 지원 동기 공백 체크
	if(ck_into==''){
		alert("지원 동기를 입력하세요.");
		ph.focus();
		return;
	}
}


/////////////////////////////////////////////////////////////////

// 4번 문제
$(function(){
	$("#head_01").click(function(){
		$("#head_01").css("background", "red");
	});
	
	$("#head_02").click(function(){
		$("#head_02").text("딸기");
	});
	
	$("#head_03").click(function(){
		$("#head_03").html("<h3>사과</h3>");
	});
});



/////////////////////////////////////////////////////////////////
