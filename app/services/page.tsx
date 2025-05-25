import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  MusicIcon, 
  HeadphonesIcon, 
  MicIcon, 
  PenToolIcon, 
  SlidersIcon,
  SpeakerIcon
} from "lucide-react";
import { Waveform } from "@/components/ui/waveform";

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive music production services to take your sound from concept to completion.
          </p>
        </div>
        
        <Tabs defaultValue="mixing" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 h-auto p-1">
              <TabsTrigger value="mixing" className="py-2 px-3 data-[state=active]:text-chart-1">
                Mixing
              </TabsTrigger>
              <TabsTrigger value="mastering" className="py-2 px-3 data-[state=active]:text-chart-2">
                Mastering
              </TabsTrigger>
              <TabsTrigger value="production" className="py-2 px-3 data-[state=active]:text-chart-3">
                Production
              </TabsTrigger>
              <TabsTrigger value="recording" className="py-2 px-3 data-[state=active]:text-chart-4">
                Recording
              </TabsTrigger>
              <TabsTrigger value="lyrics" className="py-2 px-3 data-[state=active]:text-chart-5">
                Lyrics
              </TabsTrigger>
              <TabsTrigger value="composition" className="py-2 px-3">
                Composition
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Mixing */}
          <TabsContent value="mixing" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="gradient-bg border-border/50">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-full bg-chart-1/20 flex items-center justify-center mb-6">
                    <SlidersIcon className="h-8 w-8 text-chart-1" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Mixing Services</h2>
                  <p className="text-muted-foreground mb-6">
                    Our mixing services bring balance, clarity, and professional polish to your tracks. 
                    We carefully blend all elements to create a cohesive sound that highlights the unique 
                    qualities of your music.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-1 mr-3"></div>
                      <span>Track balancing and volume adjustment</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-1 mr-3"></div>
                      <span>EQ and frequency correction</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-1 mr-3"></div>
                      <span>Dynamics processing (compression, limiting)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-1 mr-3"></div>
                      <span>Time-based effects (reverb, delay)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-1 mr-3"></div>
                      <span>Stereo imaging and placement</span>
                    </li>
                  </ul>
                  
                  <Button asChild className="bg-chart-1 hover:bg-chart-1/90 text-black">
                    <Link href="/quote?service=mixing">Get a Quote</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <div className="flex flex-col justify-between">
                <Card className="bg-card/50 border-border/50 mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">How It Works</h3>
                    <ol className="space-y-4 ml-6 list-decimal">
                      <li className="pl-2">
                        <span className="font-medium">Submit Your Tracks</span>
                        <p className="text-muted-foreground text-sm">
                          Send us your stems or multi-tracks in high-quality format.
                        </p>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Initial Mix</span>
                        <p className="text-muted-foreground text-sm">
                          We create a preliminary mix based on your references and vision.
                        </p>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Feedback & Revisions</span>
                        <p className="text-muted-foreground text-sm">
                          You review and provide feedback for up to three rounds of revisions.
                        </p>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Final Delivery</span>
                        <p className="text-muted-foreground text-sm">
                          Receive your professionally mixed track ready for mastering.
                        </p>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">Case Study</h3>
                      <Waveform isAnimated={false} className="h-6" />
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "Before working with Ginger Groove, my track sounded flat and lifeless. 
                      After their mixing process, every element had space to breathe while still 
                      maintaining a powerful, cohesive sound."
                    </p>
                    <p className="font-medium">- James Wilson, Independent Artist</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Mastering */}
          <TabsContent value="mastering" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="gradient-bg border-border/50">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-full bg-chart-2/20 flex items-center justify-center mb-6">
                    <HeadphonesIcon className="h-8 w-8 text-chart-2" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Mastering Services</h2>
                  <p className="text-muted-foreground mb-6">
                    The final crucial step in the production process. Our mastering services add 
                    the professional polish needed to make your music shine on all platforms and playback systems.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-2 mr-3"></div>
                      <span>Loudness optimization for streaming platforms</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-2 mr-3"></div>
                      <span>Final EQ adjustments and tonal balance</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-2 mr-3"></div>
                      <span>Dynamic range processing</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-2 mr-3"></div>
                      <span>Stereo enhancement</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-2 mr-3"></div>
                      <span>Format preparation for distribution</span>
                    </li>
                  </ul>
                  
                  <Button asChild className="bg-chart-2 hover:bg-chart-2/90 text-black">
                    <Link href="/quote?service=mastering">Get a Quote</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <div className="flex flex-col justify-between">
                <Card className="bg-card/50 border-border/50 mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">How It Works</h3>
                    <ol className="space-y-4 ml-6 list-decimal">
                      <li className="pl-2">
                        <span className="font-medium">Submit Your Mix</span>
                        <p className="text-muted-foreground text-sm">
                          Send us your final stereo mix with adequate headroom.
                        </p>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Initial Master</span>
                        <p className="text-muted-foreground text-sm">
                          We create a preliminary master optimized for your target platforms.
                        </p>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Feedback & Adjustments</span>
                        <p className="text-muted-foreground text-sm">
                          Review the master and request up to two rounds of adjustments.
                        </p>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Final Delivery</span>
                        <p className="text-muted-foreground text-sm">
                          Receive your master in all requested formats (WAV, MP3, etc.).
                        </p>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">Case Study</h3>
                      <Waveform isAnimated={false} className="h-6" />
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "The mastering at Ginger Groove Studios gave my album the professional 
                      sound quality I was looking for. The songs now sound consistent across 
                      the entire album and translate well to all listening environments."
                    </p>
                    <p className="font-medium">- Elena Martinez, Singer-Songwriter</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Production */}
          <TabsContent value="production" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="gradient-bg border-border/50">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-full bg-chart-3/20 flex items-center justify-center mb-6">
                    <MusicIcon className="h-8 w-8 text-chart-3" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Production Services</h2>
                  <p className="text-muted-foreground mb-6">
                    Full-service music production to bring your musical ideas to life. We help shape your 
                    sound from initial concept through arrangement, recording, and final production.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-3 mr-3"></div>
                      <span>Song arrangement and development</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-3 mr-3"></div>
                      <span>Instrumental production and programming</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-3 mr-3"></div>
                      <span>Vocal production and editing</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-3 mr-3"></div>
                      <span>Sound design and creative effects</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-3 mr-3"></div>
                      <span>Project management from start to finish</span>
                    </li>
                  </ul>
                  
                  <Button asChild className="bg-chart-3 hover:bg-chart-3/90 text-white">
                    <Link href="/quote?service=production">Get a Quote</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <div className="flex flex-col justify-between">
                <Card className="bg-card/50 border-border/50 mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">How It Works</h3>
                    <ol className="space-y-4 ml-6 list-decimal">
                      <li className="pl-2">
                        <span className="font-medium">Initial Consultation</span>
                        <p className="text-muted-foreground text-sm">
                          Discuss your vision, influences, and goals for the project.
                        </p>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Pre-Production</span>
                        <p className="text-muted-foreground text-sm">
                          Develop arrangements, select sounds, and plan the production approach.
                        </p>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Production Phase</span>
                        <p className="text-muted-foreground text-sm">
                          Record, program, and build the tracks with regular feedback sessions.
                        </p>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Mixing & Mastering</span>
                        <p className="text-muted-foreground text-sm">
                          Finalize the production with professional mixing and mastering.
                        </p>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">Case Study</h3>
                      <Waveform isAnimated={false} className="h-6" />
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "I came to Ginger Groove with just a simple melody and lyrics. They transformed 
                      my basic idea into a fully produced track that exceeded my expectations while 
                      staying true to my original vision."
                    </p>
                    <p className="font-medium">- Thomas Wright, Emerging Artist</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Recording */}
          <TabsContent value="recording" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="gradient-bg border-border/50">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-full bg-chart-4/20 flex items-center justify-center mb-6">
                    <MicIcon className="h-8 w-8 text-chart-4" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Recording Services</h2>
                  <p className="text-muted-foreground mb-6">
                    State-of-the-art recording facilities and experienced engineers to capture 
                    your performance with pristine clarity and warmth.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-4 mr-3"></div>
                      <span>Vocal recording and comping</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-4 mr-3"></div>
                      <span>Live instrument tracking</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-4 mr-3"></div>
                      <span>Full band recording sessions</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-4 mr-3"></div>
                      <span>Podcast and voice-over recording</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-4 mr-3"></div>
                      <span>Remote recording session management</span>
                    </li>
                  </ul>
                  
                  <Button asChild className="bg-chart-4 hover:bg-chart-4/90 text-black">
                    <Link href="/quote?service=recording">Get a Quote</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <div className="flex flex-col justify-between">
                <Card className="bg-card/50 border-border/50 mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Studio Equipment</h3>
                    <p className="text-muted-foreground mb-4">
                      Our recording studio features premium equipment to ensure the highest quality recordings:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-chart-4 mr-2"></div>
                        <span>Professional-grade microphones (Neumann, AKG, Shure)</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-chart-4 mr-2"></div>
                        <span>High-end preamps and conversion</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-chart-4 mr-2"></div>
                        <span>Acoustically treated recording spaces</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-chart-4 mr-2"></div>
                        <span>Multiple isolation booths</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-chart-4 mr-2"></div>
                        <span>Pro Tools HDX and other DAW options</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">Case Study</h3>
                      <Waveform isAnimated={false} className="h-6" />
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "The recording environment at Ginger Groove helped me deliver my best vocal performance yet. 
                      The engineers were patient and knew exactly how to capture the sound I was looking for."
                    </p>
                    <p className="font-medium">- Maya Lee, R&B Vocalist</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Lyrics */}
          <TabsContent value="lyrics" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="gradient-bg border-border/50">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-full bg-chart-5/20 flex items-center justify-center mb-6">
                    <PenToolIcon className="h-8 w-8 text-chart-5" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Lyrics Writing</h2>
                  <p className="text-muted-foreground mb-6">
                    Expert lyric writing services to help you express your musical vision with words 
                    that resonate with your audience and enhance your melodic ideas.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-5 mr-3"></div>
                      <span>Original lyric writing for your melodies</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-5 mr-3"></div>
                      <span>Lyric editing and refinement</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-5 mr-3"></div>
                      <span>Co-writing sessions</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-5 mr-3"></div>
                      <span>Theme and concept development</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-chart-5 mr-3"></div>
                      <span>Genre-specific lyric styling</span>
                    </li>
                  </ul>
                  
                  <Button asChild className="bg-chart-5 hover:bg-chart-5/90 text-black">
                    <Link href="/quote?service=lyrics">Get a Quote</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <div className="flex flex-col justify-between">
                <Card className="bg-card/50 border-border/50 mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Our Process</h3>
                    <ol className="space-y-4 ml-6 list-decimal">
                      <li className="pl-2">
                        <span className="font-medium">Creative Brief</span>
                        <p className="text-muted-foreground text-sm">
                          We discuss your vision, themes, emotions, and any specific requirements.
                        </p>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Concept Development</span>
                        <p className="text-muted-foreground text-sm">
                          We develop the core concept and outline for your lyrics.
                        </p>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Draft Creation</span>
                        <p className="text-muted-foreground text-sm">
                          We craft initial lyric drafts that match your melody and vision.
                        </p>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Revision & Refinement</span>
                        <p className="text-muted-foreground text-sm">
                          We collaborate on revisions until the lyrics are perfect.
                        </p>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">Case Study</h3>
                      <Waveform isAnimated={false} className="h-6" />
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "I had a great melody but struggled with the lyrics. The team at Ginger Groove 
                      helped me craft lyrics that perfectly expressed what I wanted to say while 
                      maintaining my unique voice and style."
                    </p>
                    <p className="font-medium">- Daniel Kim, Pop Artist</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Composition */}
          <TabsContent value="composition" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="gradient-bg border-border/50">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <SpeakerIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Composition Services</h2>
                  <p className="text-muted-foreground mb-6">
                    Professional music composition services for artists, media projects, 
                    advertising, and more. We create original music tailored to your specific needs.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                      <span>Original song composition</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                      <span>Film and media scoring</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                      <span>Commercial jingles and advertising music</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                      <span>Custom beats and instrumentals</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                      <span>Arrangement and orchestration</span>
                    </li>
                  </ul>
                  
                  <Button asChild>
                    <Link href="/quote?service=composition">Get a Quote</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <div className="flex flex-col justify-between">
                <Card className="bg-card/50 border-border/50 mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Industries We Serve</h3>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="border border-border/50 rounded-lg p-4 text-center">
                        <h4 className="font-medium mb-2">Film & TV</h4>
                        <p className="text-xs text-muted-foreground">
                          Scores and songs for visual media projects
                        </p>
                      </div>
                      <div className="border border-border/50 rounded-lg p-4 text-center">
                        <h4 className="font-medium mb-2">Advertising</h4>
                        <p className="text-xs text-muted-foreground">
                          Commercial jingles and background music
                        </p>
                      </div>
                      <div className="border border-border/50 rounded-lg p-4 text-center">
                        <h4 className="font-medium mb-2">Artists</h4>
                        <p className="text-xs text-muted-foreground">
                          Custom songs and co-writing for performers
                        </p>
                      </div>
                      <div className="border border-border/50 rounded-lg p-4 text-center">
                        <h4 className="font-medium mb-2">Games</h4>
                        <p className="text-xs text-muted-foreground">
                          Interactive soundtracks and theme music
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">Case Study</h3>
                      <Waveform isAnimated={false} className="h-6" />
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "Ginger Groove composed the perfect soundtrack for our short film. They understood 
                      the emotional journey we wanted to take viewers on and translated that into music 
                      that elevated the entire project."
                    </p>
                    <p className="font-medium">- Laura Thompson, Film Director</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <Button asChild size="lg">
            <Link href="/quote">Get a Personalized Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}