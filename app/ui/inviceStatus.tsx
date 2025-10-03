import clsx from "clsx";

export default function InvoiceStatus({ status }: { status: string }) {

    return (
        <span className={clsx(
            'inline-flex items-center rounded-full px-2 py-1 text-sm',
            {
                //nos dice que si el status es pending, el texto va a ser gris, pero si es paid, va a ser green
                'bg-gray-100 text-gray-500': status === 'pending',
                'bg-green-500 text-white': status === 'paid',
            }
        )}>

        </span>
    )
}