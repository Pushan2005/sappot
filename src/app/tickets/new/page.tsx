import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { HiOutlineHeart } from "react-icons/hi";

export default function CreateTicketPage() {
    return (
        <div className="h-full min-h-screen w-full bg-black relative">
            <div className="container mx-auto h-full py-8">
                <div className="overflow-hidden shadow-lg flex flex-col md:flex-row h-full">
                    {/* Left side */}
                    <div className="flex flex-col items-center justify-center p-10 md:w-1/3 bg-black text-white">
                        <div className="mb-8">
                            <HiOutlineHeart className="w-16 h-16 mx-auto mb-4" />
                        </div>
                        <h1 className="text-3xl font-bold mb-4">
                            We're listening
                        </h1>
                        <p className="text-gray-300 text-center leading-relaxed">
                            Your voice matters to us. Share what's on your mind,
                            and we will get back to you soon.
                        </p>
                    </div>

                    {/* Right side */}
                    <div className="p-10 md:w-2/3 bg-black">
                        <h2 className="text-2xl font-semibold text-white mb-6">
                            How can we help?
                        </h2>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <Label
                                    htmlFor="heading"
                                    className="text-sm font-medium text-gray-300 flex items-center"
                                >
                                    Subject
                                </Label>
                                <Input
                                    type="text"
                                    id="heading"
                                    name="heading"
                                    placeholder="What's on your mind?"
                                    className="block w-full px-4 py-3 rounded-lg shadow-sm bg-muted text-white focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="content"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Details
                                </Label>
                                <Textarea
                                    id="content"
                                    name="content"
                                    rows={4}
                                    placeholder="Tell us more!"
                                    className="block w-full px-4 py-3 rounded-lg shadow-sm bg-muted text-white focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                />
                                <p className="text-xs text-gray-400 mt-1">
                                    Nothing is too small - we appreciate all
                                    feedback
                                </p>
                            </div>

                            <Button
                                type="submit"
                                className="w-full py-3 px-6 rounded-lg shadow-sm text-base font-medium"
                            >
                                Send Your Message
                            </Button>
                            <p className="text-center text-sm text-gray-400 mt-2">
                                We will respond within 24 hours
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
