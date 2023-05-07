// + new 버튼 클릭시 todo 추가해주는 부분 ('체크박스, text, 버튼'li만들어서 ul에 넣기, 완료, 삭제 이벤트 추가)
document.getElementById('add-task').addEventListener('click', (e) => {
    // checkbox, span, button 요소 각각 생성

    // (문재) 체크박스를 클릭하면 체크가 되는게 아니라 입력 커서가 뜨는 문제 발생..
    // const checkbox = createElement({
    //     tagName: 'input',
    //     type: 'checkbox',
    //     className: 'checkbox',
    // });

    // (시도) 채크박스만 함수 사용하지 않고 생성해보기 (-> 해결 완료))
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    const span = createElement({
        tagName: 'span',
    });
    const button = createElement({
        tagName: 'button',
        className: 'del-button',
    });

    button.innerText = 'x';

    // 입력받은 todo span 요소에 추가
    span.innerText = document.getElementById('task-input').value;
    // 입력창 초기화
    document.getElementById('task-input').value = '';
    // checkbox 클릭하면 span 선 그어주기 (확인 필요))
    checkbox.addEventListener('click', (e) => {
        if (span.style.textDecoration === 'line-through') {
            span.style.textDecoration = '';
        } else {
            span.style.textDecoration = 'line-through';
        }
    });

    // li 요소 생성
    const list = createElement({
        tagName: 'li',
    });

    // 체크박스, 할일, 삭제버튼 하나의 li로 만들기
    list.append(checkbox, span, button);
    // 위에서 만든 li ul에 추가하기
    document.querySelector('ul').appendChild(list);

    // todo 삭제
    button.addEventListener('click', (e) => {
        document.querySelector('ul').removeChild(list);
    });
});


const createElement = (data) => {
    const tag = document.createElement(data.tagName);
    if (data.className) {
        tag.className = data.className;
    } else if (data.id) {
        tag.id = data.id;
    } else if (data.for) {
        tag.for = data.for;
    } else if (data.innerText) {
        tag.innerText = data.innerText;
    } else if (data.type) {
        tag.type = data.type;
    }
    return tag;
};
