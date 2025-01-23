'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

export default function IndeedWork() {
    return (
        <div className="container mx-auto px-4 py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link href="/#work" scroll={false} className="text-blue-500 hover:text-blue-700 mb-8 inline-block">
                    ← Back to Home
                </Link>

                <h1 className="text-4xl font-bold mb-6">Indeed Project</h1>

                <div className="grid gap-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                        <p className="text-lg">
                            Description of your work at Indeed goes here...
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Role & Responsibilities</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Key responsibility 1</li>
                            <li>Key responsibility 2</li>
                            <li>Key responsibility 3</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-200 rounded-full">React</span>
                            <span className="px-3 py-1 bg-gray-200 rounded-full">TypeScript</span>
                            <span className="px-3 py-1 bg-gray-200 rounded-full">Next.js</span>
                        </div>
                    </section>
                </div>
            </motion.div>
        </div>
    )
}
