export default function Table() {
    return (
        <div className="w-screen h-screen mx-auto px-4 py-16 sm:px-6 lg:px-8 mb-96 bg-white">
            {/* Header Section */}
            <div className="text-center bg-white pb-5">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight m-5">
                    Flexible Plans,
                    <br />
                    Transparent Pricing
                </h1>
                <p className="text-gray-600 mb-2">Find the Perfect Fit for You</p>
                <p className="text-red-500">30-day free trial with money-back guarantee.</p>
            </div>

            {/* Pricing Table */}
            <div className="mb-8 flex justify-center items-center flex-col">
                <h2 className="text-2xl font-semibold mb-8">Compare our plans</h2>

                <div className="grid grid-cols-4 gap-6">
                    {/* Features Column */}
                    <div className="col-span-1">
                        <div className="h-16 flex items-center">
                            <span className="font-medium">Features</span>
                        </div>
                        <div className="mt-8">
                            <h3 className="font-semibold mb-4">Basic Management</h3>
                            <div className="space-y-6">
                                <div className="h-12">Users</div>
                                <div className="h-12">Branches</div>
                                <div className="h-12">Courses</div>
                                <div className="h-12">Max. Students Allowed</div>
                                <div className="h-12">Communication</div>
                                <div className="h-12">Bulk Updates</div>
                                <div className="h-12">User Roles</div>
                            </div>
                        </div>
                    </div>

                    {/* Starter Plan */}
                    <div className="col-span-1.5">
                        <div className="h-16">
                            <h3 className="font-semibold">Starter</h3>
                            <p className="text-sm text-gray-600">$17/month, billed monthly</p>
                        </div>
                        <div className="mt-8 space-y-6">
                            <div className="h-12 pt-8">1</div>
                            <div className="h-12">1</div>
                            <div className="h-12">3</div>
                            <div className="h-12">25</div>
                            <div className="h-12">25</div>
                            <div className="h-12">25</div>
                            <div className="h-12">25</div>
                            <div className="mt-8">
                                <button className="bg-red-50 text-red-500 px-6 py-2 rounded-lg hover:bg-red-100 transition-colors">
                                    Get Started →
                                </button>
                                <p className="text-sm text-gray-500 mt-2">No credit card required</p>
                            </div>
                        </div>
                    </div>

                    {/* Premium Plan */}
                    <div className="col-span-1.5">
                        <div className="h-16">
                            <h3 className="font-semibold">Premium</h3>
                            <p className="text-sm text-gray-600">$89/month, billed monthly</p>
                        </div>
                        <div className="mt-8 space-y-6">
                            <div className="h-12 pt-8">15</div>
                            <div className="h-12">10</div>
                            <div className="h-12">15/branch</div>
                            <div className="h-12">500</div>
                            <div className="h-12">Yes</div>
                            <div className="h-12">Yes</div>
                            <div className="h-12">Yes</div>
                            <div className="mt-8">
                                <button className="bg-red-50 text-red-500 px-6 py-2 rounded-lg hover:bg-red-100 transition-colors">
                                    Get Started →
                                </button>
                                <p className="text-sm text-gray-500 mt-2">No credit card required</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

