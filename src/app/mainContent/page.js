'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const Page = () => {
    const router = useRouter();

    return (
        <main className="min-h-screen bg-gray-50">
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-semibold text-center mb-6">Салон красоты белоснежка</h2>
                    <p className="text-lg text-gray-700">
                        Для того, чтобы оставить запись позвоните по номеру телефона (+79123565656)
                    </p>
                </div>
            </section>
            <section className="py-8 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-2xl font-semibold text-center mb-6">Логотип салона красоты</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div className="relative rounded-lg overflow-hidden">
                            <Image src="/Resourses/logokrs.png" width={60} height={60} alt="Logo" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;
