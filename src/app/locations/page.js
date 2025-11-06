'use client'

import SavedLocationsManager from '../../components/SavedLocationsManager.js'

export default function LocationsPage() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Saved Locations</h1>
        <p>Manage your favorite locations for sun tracking</p>
      </header>
      
      <main className="page-content">
        <SavedLocationsManager />
      </main>
    </div>
  )
}