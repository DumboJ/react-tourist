// @ts-ignore
// ts类型检查错误，需要严格声明参数类型，使用interface声明，或者使用@ts-ignore避免严格检查错误
interface SubButtonProps {
    count: number;
    onClick: () => void;
}
function SubButton({ count, onClick }:SubButtonProps) {
    return (
        <button onClick={onClick}>
            点了 {count} 次
        </button>
    );
}
export default SubButton
