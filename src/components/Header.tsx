interface HeaderProps {
    title: string;
}

export const Header = ({ title }: HeaderProps) => {
    return (
        <div className="mb-5 mt-16">
            <div className="mb-0 pb-5 font-bold text-[#fafafa] text-2xl sm:text-4xl">
                {title}
            </div>
            <div className="h-[6px] w-11 bg-yellow-gradient bottom-0 left-0 rounded"></div>
        </div>

    );
}