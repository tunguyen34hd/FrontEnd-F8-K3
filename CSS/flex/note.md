# Flex = Flexible box Module

## Các thuộc tính trong nhóm Flex Container

-   display: flex | inline-flex => kích hoạt flex
-   flex-direction: Chọn trụ cho flex

*   row: Nằm ngang
*   row-reverse: Nằm ngang đảo ngược
*   column: Nằm dọc
*   column-reverse: Nằm dọc đảo ngược

-   justify-content: căn chỉnh các item theo hướng song song với trục chính

*   flex-start
*   flex-end
*   center
*   space-around
*   space-between
*   space-evenly

-   align-items: căn chỉnh các item theo hướng vuông góc với trục chính (cross)

*   stretch => Mặc định, full chiều cao
*   flex-start
*   flex-end
*   center
*   baseline

-   flex-wrap

*   no-wrap => Mặc định
*   wrap
*   wrap-reverse

-   align-content: Căn chỉnh hàng (cột) => Chỉ áp dụng khi có nhiều hàng (cột)

*   flex-start
*   flex-end
*   center
*   space-around
*   space-between
*   space-evenly

-   gap: căn chỉnh khoảng cách giữa các item

## Các thuộc tính trong nhóm Flex Item

-   flex-grow: Dãn các item để lấp đầy các khoảng trống
-   flex-shrink: tự động co lại các item
-   flex-basis: Thiết lập các kích thước ban đầu cho các item (ko set dc width)
    => flex-basis: sẽ bị chặn bởi min-width, max-width
-   flex: grow shrink basis
-   align-selft: Căn chỉnh 1 item

*   stretch => Mặc định, full chiều cao
*   flex-start
*   center
*   flex-end
*   baseline

-   order: Sắp xếp thứ tự các item
    => Nhận số nguyên
