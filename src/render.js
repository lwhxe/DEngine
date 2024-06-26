document.addEventListener('DOMContentLoaded', () => {
    const leftSidebar = document.querySelector('.left-sidebar');
    const rightSidebar = document.querySelector('.right-sidebar');
    const bottomConsole = document.querySelector('.bottom-console');
    const leftHandle = leftSidebar.querySelector('.handle');
    const rightHandle = rightSidebar.querySelector('.handle');
    const bottomHandle = bottomConsole.querySelector('.horizontal-handle');

    let isResizingLeft = false;
    let isResizingRight = false;
    let isResizingBottom = false;
    let startX, startY, startWidth, startHeight;

    const mouseDownHandler = (e, target) => {
        if (target === leftSidebar) {
            isResizingLeft = true;
        } else if (target === rightSidebar) {
            isResizingRight = true;
        } else if (target === bottomConsole) {
            isResizingBottom = true;
        }
        startX = e.clientX;
        startY = e.clientY;
        startWidth = target.offsetWidth;
        startHeight = target.offsetHeight;
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = (e) => {
        if (isResizingLeft) {
            const newWidth = startWidth + (e.clientX - startX);
            if (newWidth >= 100 && newWidth <= 500) { // Minimum and maximum width for left sidebar
                leftSidebar.style.width = `${newWidth}px`;
            }
        } else if (isResizingRight) {
            const newWidth = startWidth - (e.clientX - startX);
            if (newWidth >= 100 && newWidth <= 500) { // Minimum and maximum width for right sidebar
                rightSidebar.style.width = `${newWidth}px`;
            }
        } else if (isResizingBottom) {
            const newHeight = startHeight - (e.clientY - startY);
            if (newHeight >= 50 && newHeight <= 300) { // Minimum and maximum height for bottom console
                bottomConsole.style.height = `${newHeight}px`;
            }
        }
    };

    const mouseUpHandler = () => {
        isResizingLeft = false;
        isResizingRight = false;
        isResizingBottom = false;
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    leftHandle.addEventListener('mousedown', (e) => mouseDownHandler(e, leftSidebar));
    rightHandle.addEventListener('mousedown', (e) => mouseDownHandler(e, rightSidebar));
    bottomHandle.addEventListener('mousedown', (e) => mouseDownHandler(e, bottomConsole));
});
