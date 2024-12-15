"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Apple, Users, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const foodListings = [
  {
    id: 1,
    title: "Fresh Organic Vegetables",
    description: "Assorted vegetables from local garden",
    location: "Downtown Community Center",
    distance: "0.5 miles",
    donor: "Sarah M.",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=384&h=256",
  },
  {
    id: 2,
    title: "Bakery Surplus",
    description: "Fresh bread and pastries",
    location: "Sunshine Bakery",
    distance: "1.2 miles",
    donor: "John D.",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=384&h=256",
  },
  {
    id: 3,
    title: "Canned Goods",
    description: "Unexpired canned vegetables and fruits",
    location: "Hope Community Hub",
    distance: "0.8 miles",
    donor: "Maria L.",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1584385002340-d886f3a0f097?auto=format&fit=crop&q=80&w=384&h=256",
  },
];

export default function Home() {
  useEffect(() => {
    document.title = " Food Sharing App";
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <img src="/images/app-logo.jpeg" alt="App Logo" className="h-10" />
          </Link>
          <Link href="/">
            <h1 className="text-xl font-bold">SharePlate</h1>
          </Link>
        </div>
      </header>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/90 to-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Share Food, Share Hope</h1>
            <p className="text-lg mb-8">
              Connect with your community to share surplus food and reduce waste
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Donate Food
              </Button>
              <Button variant="secondary" size="lg">
                Find Food
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 -mt-8">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search for food listings..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                  icon={<Search className="w-4 h-4" />}
                />
              </div>
              <div className="w-64">
                <Input
                  placeholder="Location"
                  icon={<MapPin className="w-4 h-4" />}
                />
              </div>
              <Button>Search</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Apple className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">1,234</h3>
                <p className="text-muted-foreground">Food Items Shared</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">567</h3>
                <p className="text-muted-foreground">Active Members</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">4.9</h3>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Food Listings */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-8">Available Food Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodListings.map((listing) => (
            <Card key={listing.id} className="overflow-hidden">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{listing.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {listing.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{listing.location}</span>
                  <span className="text-muted-foreground">
                    ({listing.distance})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span>{listing.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    by {listing.donor}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
