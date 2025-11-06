import Link from 'next/link';
import { Card, CardHeader, CardContent, Button } from '../components/ui';

export default function Home() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Sun Tracking App</h1>
        <p>Solar position calculator and visualization tool for photographers, filmmakers, and outdoor enthusiasts</p>
      </header>

      <main className="page-content">
        <div className="grid-auto">
          <Card>
            <CardHeader>
              <h2>Current Location</h2>
              <p>Real-time sun position data</p>
            </CardHeader>
            <CardContent>
              <p>Sun position data will be displayed here once location services are implemented.</p>
              <div style={{ marginTop: '1rem' }}>
                <Button variant="outline" size="small">
                  Get Location
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2>Today's Sun Times</h2>
              <p>Sunrise, sunset, and golden hours</p>
            </CardHeader>
            <CardContent>
              <p>Sunrise, sunset, and golden hour times will be calculated and displayed here.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2>Interactive Map</h2>
              <p>Visualize sun paths</p>
            </CardHeader>
            <CardContent>
              <p>Mapbox integration with sun path visualization will be available here.</p>
              <div style={{ marginTop: '1rem' }}>
                <Link href="/map">
                  <Button variant="primary" size="small">
                    Open Map
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2>Compass & Orientation</h2>
              <p>Find sun direction</p>
            </CardHeader>
            <CardContent>
              <p>Device orientation compass showing sun direction will be implemented here.</p>
              <div style={{ marginTop: '1rem' }}>
                <Link href="/compass">
                  <Button variant="primary" size="small">
                    Open Compass
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2>3D Visualization</h2>
              <p>Realistic lighting preview</p>
            </CardHeader>
            <CardContent>
              <p>Three.js 3D scene with human model and realistic sun lighting effects.</p>
              <div style={{ marginTop: '1rem' }}>
                <Link href="/3d-view">
                  <Button variant="primary" size="small">
                    View 3D
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2>Future Predictions</h2>
              <p>Plan ahead with sun forecasts</p>
            </CardHeader>
            <CardContent>
              <p>Preview sun positions and lighting conditions for future dates.</p>
              <div style={{ marginTop: '1rem' }}>
                <Link href="/predictions">
                  <Button variant="primary" size="small">
                    View Predictions
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}