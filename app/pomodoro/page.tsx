"use client"

import { useEffect, useState } from "react"
import { Bell, FileText, LogIn } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function PomodoroTimer() {
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState(60 * 60) // 1 hour in seconds
  const [remainingTime, setRemainingTime] = useState(time)
  const [showStartDialog, setShowStartDialog] = useState(false)
  const [showResetDialog, setShowResetDialog] = useState(false)
  const [showReportsDialog, setShowReportsDialog] = useState(false)
  const [taskName, setTaskName] = useState("")
  const [selectedDuration, setSelectedDuration] = useState("60")
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Simulating login state
  const [notificationPermission, setNotificationPermission] =
    useState("default")

  useEffect(() => {
    if ("Notification" in window) {
      setNotificationPermission(Notification.permission)
    }
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval)
            handleTimerComplete()
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isRunning, remainingTime])

  const handleStartPause = () => {
    if (remainingTime === time) {
      setShowStartDialog(true)
    } else {
      setIsRunning(!isRunning)
    }
  }

  const handleStartTimer = () => {
    setTime(parseInt(selectedDuration) * 60)
    setRemainingTime(parseInt(selectedDuration) * 60)
    setIsRunning(true)
    setShowStartDialog(false)
  }

  const handleReset = () => {
    setShowResetDialog(true)
  }

  const confirmReset = () => {
    setIsRunning(false)
    setRemainingTime(time)
    setShowResetDialog(false)
  }

  const handleTimerComplete = () => {
    setIsRunning(false)
    if (notificationPermission === "granted") {
      const focusedTime = formatTime(time)
      new Notification("Your time is up!", {
        body: `Great work focusing for ${focusedTime}!`,
      })
    } else {
      alert("Timer Complete!") // Fallback for when notifications are not allowed
    }
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  function requestNotificationPermission() {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        setNotificationPermission(permission)
      })
    }
  }

  // Mock data for reports (replace with actual data in a real implementation)
  const focusedHoursToday = 4
  const focusedHoursThisMonth = 80

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="absolute right-4 top-4 flex space-x-4">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setShowReportsDialog(true)}
          className="rounded-none bg-gray-200 font-normal text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900"
        >
          <FileText className="size-3.5" />
          Reports
        </Button>
        <Button
          size="sm"
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="rounded-none bg-gray-200 font-normal text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900"
        >
          <LogIn className="size-3.5" />
          {isLoggedIn ? "Sign out" : "Sign in"}
        </Button>
        {notificationPermission !== "granted" && (
          <Button
            size="sm"
            onClick={requestNotificationPermission}
            className="rounded-none bg-gray-200 font-normal text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900"
          >
            <Bell className="size-3.5" />
            Enable notifications
          </Button>
        )}
      </div>

      {remainingTime !== time ? (
        <div className="flex w-60 flex-col">
          <time
            className="text-center text-6xl font-bold"
            dateTime={`PT${Math.floor(remainingTime / 60)}M${remainingTime % 60}S`}
          >
            {formatTime(remainingTime)}
          </time>{" "}
          <div className="mt-4 flex w-full divide-x divide-gray-200">
            <Button
              className="grow rounded-none bg-teal-600 text-white hover:bg-teal-700"
              onClick={handleStartPause}
            >
              {isRunning
                ? "Pause"
                : remainingTime === time
                  ? "Start timer"
                  : "Resume"}
            </Button>
            {remainingTime !== time && (
              <Button
                className="grow rounded-none bg-teal-600 text-white hover:bg-teal-700"
                onClick={handleReset}
              >
                Reset
              </Button>
            )}
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-4xl font-bold text-gray-900">Time to focus</h1>
          <Button
            className="mt-4 rounded-none bg-teal-600 text-white shadow hover:bg-teal-600"
            onClick={handleStartPause}
          >
            {isRunning
              ? "Pause"
              : remainingTime === time
                ? "Start timer"
                : "Resume"}
          </Button>
        </>
      )}

      <Dialog open={showStartDialog} onOpenChange={setShowStartDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Start Timer</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="taskName">Task Name</Label>
              <Input
                id="taskName"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                disabled={!isLoggedIn}
              />
              {!isLoggedIn && (
                <p className="mt-1 text-sm text-muted-foreground">
                  To save tasks, you must log in.
                </p>
              )}
            </div>
            <div>
              <Label>Choose timer duration</Label>
              <RadioGroup
                value={selectedDuration}
                onValueChange={setSelectedDuration}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="15" id="15min" />
                  <Label htmlFor="15min">15 minutes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="30" id="30min" />
                  <Label htmlFor="30min">30 minutes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="60" id="60min" />
                  <Label htmlFor="60min">60 minutes</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleStartTimer}>Start</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showResetDialog} onOpenChange={setShowResetDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to reset the timer?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. Your current progress will be lost.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmReset}>Reset</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={showReportsDialog} onOpenChange={setShowReportsDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Focus Reports</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Focused hours today</h3>
              <p>
                {focusedHoursToday} hours (
                {((focusedHoursToday / 24) * 100).toFixed(1)}%)
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Focused hours this month</h3>
              <p>
                {focusedHoursThisMonth} hours (
                {((focusedHoursThisMonth / (24 * 30)) * 100).toFixed(1)}%)
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
