import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils";
import Link from "next/link"
import Image from "next/image"
import {Button} from "@/components/ui/button";

interface CompanionsListProps {
    title:string;
    companions?:Companion[];
    classNames?:string;
}
const subjectColors: Record<string, string> = {
    maths: "#FDE047",      // yellow
    language: "#FCA5A5",   // soft red/pink
    science: "#4ADE80",    // green
    history: "#93C5FD",    // light blue
    coding: "#A78BFA",     // purple
    economics: "#FCD34D",  // amber
};

const getSubjectColor = (subject: string) => {
    return subjectColors[subject.toLowerCase()] || "#E5E7EB"; // default gray
};



const CompanionsList = ({title,companions,classNames}) : CompanionsListProps => {
  return (
      <article className={cn("companion-list", classNames)}>
        <h2 className='font-bold text-3xl'>Recent sessions</h2>
        <Table>

            <TableHeader>
                <TableRow>
                    <TableHead className="text-lg w-2/3">Lessons</TableHead>
                    <TableHead className='text-lg'>Subject</TableHead>
                    <TableHead className='text-lg text-right'>Duration</TableHead>

                </TableRow>
            </TableHeader>
            <TableBody>

                {companions?.map(({id,subject,name,topic,duration}) => (
                    <TableRow key={id}>
                        <TableCell>
                            <Link href={`/companions/${id}`}>
                                <div className='flex items-center gap-2'>
                                    <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
                                         style={{ backgroundColor: getSubjectColor(subject) }}>
                                        <Image
                                            src={`icons/${subject}.svg`}
                                            alt={subject}
                                            width={35}
                                            height={35}
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-bold text-2xl'>{name}</p>
                                        <p className='font-italic text-1xl'>Topic : {topic}</p>
                                    </div>
                                </div>

                            </Link>
                        </TableCell>
                        <TableCell>
                            <div className='flex flex-col gap-2 justify-start items-start'>
                                <p className='subject-badge w-fit max-md:hidden'>{subject}</p>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex flex-col gap-2'>
                                <p className='font-italic text-2xl text-right'>{duration} mins</p>

                            </div>
                        </TableCell>
                    </TableRow>
                ))}

            </TableBody>
        </Table>
    </article>
  )
}

export default CompanionsList
